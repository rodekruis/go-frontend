import React, { useContext } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import {
  _cs,
  addSeparator,
} from '@togglecorp/fujs';

import { countryIsoMapById } from '#utils/field-report-constants';
import { getDistrictsForCountryPF } from '#actions';

import { getBoundingBox } from '#utils/country-bounding-box';
import DownloadButton from '#components/map/common/download-button';
import MapHeader from '#components/map/common/map-header';
import MapFooter from '#components/map/common/map-footer';

import newMap from '#utils/get-new-map';
import LanguageContext from '#root/languageContext';

import nepalGeojson from '#root/../assets/geojsons/nepal.geojson';

const ProjectDetailElement = ({
  label,
  value,
  className,
}) => (
  <div className={_cs(className, 'popover-project-detail-element')}>
    <div className='popover-project-detail-element-label'>
      {label}
    </div>
    :
    <div className='popover-project-detail-element-value'>
      {value}
    </div>
  </div>
);

const ProjectDetail = (p) => {
  const {
    project: {
      name: projectName,
      reporting_ns_detail: {
        society_name: reportingNationalSocietyName,
      },
      start_date: startDate,
      end_date: endDate,
      budget_amount: budget,
      status_display,
      programme_type_display,
      primary_sector_display,
      modified_at: modifiedAt = '-',
    },
  } = p;

  const { strings } = useContext(LanguageContext);
  return (
    <div className='popover-project-detail'>
      <ProjectDetailElement
        className='popover-project-detail-last-updated'
        label={strings.threeWMapLastUpdate}
        value={modifiedAt.substring(0, 10)}
      />
      <div className='popover-project-detail-heading'>
        { reportingNationalSocietyName } : { projectName }
      </div>
      <ProjectDetailElement
        label={strings.threeWMapStatus}
        value={`${status_display} (${startDate} to ${endDate})`}
      />
      <ProjectDetailElement
        label={strings.threeWMapSector}
        value={primary_sector_display}
      />
      <ProjectDetailElement
        label={strings.threeWMapProgrammeType}
        value={programme_type_display}
      />
      <ProjectDetailElement
        label={strings.threeWMapBudget}
        value={addSeparator(budget)}
      />
    </div>
  );
};

class ThreeWMap extends React.PureComponent {
  constructor (props) {
    super(props);

    this.mapContainerRef = React.createRef();
    this.mapLoaded = false;
  }

  componentDidMount () {
    const { current: mapContainer } = this.mapContainerRef;
    this.props._getDistricts(this.props.countryId);
    this.map = newMap(
      mapContainer,
      'mapbox://styles/go-ifrc/ck1izjgrs016k1cmxwekow9m0',
    );

    this.map.setMaxZoom(7);
    this.map.on('load', this.handleMapLoad);
    this.map.on('click', this.handleMapClick);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps (nextProps) {
    const {
      countryId: oldCountryId,
      projectList: oldProjectList,
      districtsResponse: oldDistrictsResponse,
    } = this.props;

    const {
      countryId,
      projectList,
      districtsResponse,
    } = nextProps;

    if (countryId !== oldCountryId) {
      this.props._getDistricts(this.props.countryId);
    }

    if (countryId !== oldCountryId || projectList !== oldProjectList || oldDistrictsResponse !== districtsResponse) {
      if (this.mapLoaded) {
        this.fillMap(countryId, projectList);
      }
    }
  }

  handleMapLoad = () => {
    this.mapLoaded = true;

    this.map.addSource("nepal", {
        type: "geojson",
        data: nepalGeojson,
    });

    this.map.addLayer({
        id: "nepal",
        type: "fill",
        source: "nepal",
        layout: {},
        paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8,
        },
    });

    const {
      countryId,
      projectList,
    } = this.props;

    this.fillMap(countryId, projectList);
  }

  resetBounds = (countryId, largePadding = false) => {
    const iso2 = countryIsoMapById[countryId].toUpperCase();
    const bbox = getBoundingBox(iso2);
    this.map.fitBounds(
      bbox,
      {
        padding: {
          top: largePadding ? 100 : 20,
          right: largePadding ? (280 + 10) : 90,
          bottom: largePadding ? 80 : 20,
          left: 10,
        }
      }
    );
  }

  fillMap = (countryId, projectList) => {
    this.resetBounds(countryId);

    const projectProvinces = projectList.map(d => d.where_province).flat();
    const projectProvinceCounts = projectProvinces.reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 0;
      }
      ++acc[val];
      return acc;
    }, {});

    const provinces = [0,1,2,3,4,5,6].map(d => ({
        id: d + 1,
        count: projectProvinceCounts[d] || 0,
    }));

    // const maxProjects = Math.max(0, ...Object.values(allDistricts));
    const maxProjects = Math.max(0, ...Object.values(projectProvinceCounts));
    let opacityProperty;

    const upperShift = 0.2;
    const lowerShift = 0.1;

    if (provinces.length > 0) {
      opacityProperty = [
        'match',
        ['get', 'STATE_CODE'],

        ...provinces.map(province => {
          const value = (maxProjects !== 0)
            ? (lowerShift + (province.count / maxProjects) * (1 - upperShift - lowerShift))
            : lowerShift;

          return [
            province.id,
            value,
          ];
        }).flat(),

        0,
      ];
    } else {
      opacityProperty = 0;
    }

    this.map.setPaintProperty(
      'nepal',
      'fill-opacity',
      opacityProperty,
    );
  }

  handleMapClick = (e) => {
    const { projectList } = this.props;
    const projectDistrictList = [...new Set(projectList.map(d => d.where_province + 1).flat())];

    const features = this.map.queryRenderedFeatures(
      e.point,
      {
        layers: ['nepal'],
        filter: [
          'in',
          'STATE_CODE',
          ...projectDistrictList,
        ],
      },
    );

    this.showProvinceDetailPopover(this.map, e.lngLat, features[0]);
  }

  showProvinceDetailPopover = (
    map,
    clickLocation,
    feature,
  ) => {
    if (!feature) {
      return;
    }

    const { projectList } = this.props;
    const popoverContent = document.createElement('div');
    const {
      properties,
    } = feature;

    let {
      STATE_CODE: stateCode,
      Province: title,
    } = properties;

    title = title.length > 1 ? title : "Province " + title;

    const projectsInCurrentProvince = projectList.filter(
        p => p.where_province + 1 === stateCode
    );

    const numProjects = projectsInCurrentProvince.length;

    render(
      (
        <div className='three-w-map-district-detail-popover'>
          <h4 className='detail-popover-title'>
            { title } ({numProjects} { numProjects > 1 ? 'projects' : 'project' })
          </h4>
          <div className='detail-popover-content'>
            { projectsInCurrentProvince.map(p => (
              <ProjectDetail
                project={p}
                key={p.id}
              />
            ))}
          </div>
        </div>
      ),
      popoverContent,
    );

    if (this.popover) {
      this.popover.remove();
    }

    this.popover = new mapboxgl.Popup({ closeButton: false })
      .setLngLat(clickLocation)
      .setDOMContent(popoverContent.children[0])
      .addTo(map);
  }

  render () {
    const { strings } = this.context;

    return (
      <div className='three-w-map-wrapper'>
        <MapHeader downloadedHeaderTitle={strings.threeWMapProjects} />
        <div
          ref={this.mapContainerRef}
          className='three-w-map'
        />
        <DownloadButton
          mapContainerClassName='three-w-map-vis'
          setZoomToDefault={() => this.resetBounds(this.props.countryId, true)}
        />
        <MapFooter />
      </div>
    );
  }
}

ThreeWMap.contextType = LanguageContext;

const selector = (state, ownProps) => ({
  districtsResponse: state.districts,
});

const dispatcher = dispatch => ({
  _getDistricts: (...args) => dispatch(getDistrictsForCountryPF(...args)),
});

export default connect(
  selector,
  dispatcher
)(ThreeWMap);
