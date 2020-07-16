import React from 'react';
import { PropTypes } from 'prop-types';
import Faram from '@togglecorp/faram';
import { unique } from '@togglecorp/fujs';
import memoize from 'memoize-one';

import SelectInput from '#components/form-elements/select-input';
import {
  organizationalUnitOptions,
  partnerOptions,
  activityOptions,
  statusList,
  sectorList,
  secondarySectorList,
  programmeTypeList,
} from '#utils/constants';
import LanguageContext from '#root/languageContext';

const compareString = (a, b) => a.label.localeCompare(b.label);

const programmeTypeOptions = programmeTypeList.map(p => ({
  value: p.key,
  label: p.title,
})).sort(compareString);

const sectorsOfActivityOptions = sectorList.map(p => ({
  value: p.inputValue,
  label: p.title,
})).sort(compareString);

const tagOptions = secondarySectorList.map(p => ({
  value: p.inputValue,
  label: p.title,
})).sort(compareString);

const statusOptions = statusList.map(p => ({
  value: p.key,
  label: p.title,
})).sort(compareString);

export default class ThreeWFilter extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      filterValues: {
        organizational_unit: undefined,
        partner: undefined,
        activity: undefined,
        programme_type: undefined,
        primary_sector: undefined,
        status: undefined,
      }
    };

    this.schema = {
      fields: {
        organizational_unit: [],
        partner: [],
        activity: [],
        programme_type: [],
        primary_sector: [],
        secondary_sectors: [],
        status: []
      }
    };
  }

  getOrganizationalUnitOptions = memoize((projectList) => {
    const organizationalUnits = unique(projectList.map(p => ({
      value: p.organizational_unit,
      label: organizationalUnitOptions[p.organizational_unit].label,
    })), p => p.value);

    return organizationalUnits;
  })

  getPartnerOptions = memoize((projectList) => {
    const partners = unique(projectList.map(p => ({
      value: p.partner,
      label: partnerOptions[p.partner].label,
    })), p => p.value);

    return partners;
  })

  getActivityOptions = memoize((projectList) => {
    const activities = unique(projectList.map(p => ({
      value: p.activity,
      label: activityOptions[p.activity].label,
    })), p => p.value);

    return activities;
  })

  handleFaramChange = (filterValues) => {
    const { onFilterChange } = this.props;
    this.setState({ filterValues });

    if (onFilterChange) {
      onFilterChange(filterValues);
    }
  }

  render () {
    const {
      className,
      projectList,
    } = this.props;

    const { filterValues } = this.state;
    const { strings } = this.context;

    return (
      <Faram
        className={className}
        schema={this.schema}
        value={filterValues}
        onChange={this.handleFaramChange}
      >
        <SelectInput
          faramElementName='organizational_unit'
          label={strings.threeWFilter}
          placeholder={strings.threeWFilterOrganizationalUnitPlaceholer}
          options={this.getOrganizationalUnitOptions(projectList)}
          className='select-input'
        />
        <SelectInput
          faramElementName='partner'
          label={strings.threeWFilter}
          placeholder={strings.threeWFilterPartnerPlaceholer}
          options={this.getPartnerOptions(projectList)}
          className='select-input'
        />
        <SelectInput
          faramElementName='activity'
          label={strings.threeWFilter}
          placeholder={strings.threeWFilterActivityPlaceholer}
          options={this.getActivityOptions(projectList)}
          className='select-input'
        />
        <SelectInput
          faramElementName='programme_type'
          label={strings.threeWProgrammeType}
          placeholder={strings.threeWProgrammeTypePlaceholder}
          options={programmeTypeOptions}
          className='select-input'
        />
        <SelectInput
          faramElementName='primary_sector'
          label={strings.threeWSector}
          placeholder={strings.threeWSectorPlaceholder}
          options={sectorsOfActivityOptions}
          className='select-input'
        />
        <SelectInput
          faramElementName='secondary_sectors'
          label={strings.threeWTag}
          placeholder={strings.threeWTagPlaceholder}
          options={tagOptions}
          className='select-input'
        />
        <SelectInput
          faramElementName='status'
          label={strings.threeWStatus}
          placeholder={strings.threeWStatusPlaceholder}
          options={statusOptions}
          className='select-input'
        />
      </Faram>
    );
  }
}

ThreeWFilter.contextType = LanguageContext;
ThreeWFilter.propTypes = {
  className: PropTypes.string,
  projectList: PropTypes.array,
};
