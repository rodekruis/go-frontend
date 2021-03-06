import React from 'react';
import { PropTypes as T } from 'prop-types';
import Select from 'react-select';
import {
  NavLink,
  Link,
  withRouter,
} from 'react-router-dom';

import { api, environment } from '#config';
import { request } from '#utils/network';
import { uppercaseFirstLetter as u, isoDate } from '#utils/format';
import LanguageSelect from '#components/LanguageSelect';
import Translate from '#components/Translate';
import LanguageContext from '#root/languageContext';

import UserMenu from './connected/user-menu';
import HeaderRegionButton from './header-region-button';

const noFilter = options => options;

function getUriForType (type, id, data) {
  switch (type) {
    case 'region':
      return '/regions/' + id;
    case 'country':
      return '/countries/' + id;
    case 'report':
      return '/reports/' + id;
    case 'event':
      return '/emergencies/' + id;
    case 'appeal':
      return data.event_id ? '/emergencies/' + data.event_id : '/appeals/all?record=' + id;
    default:
      return '/uhoh';
  }
}

function Header (props) {
  const {
    history,
    match,
  } = props;

  const { strings } = React.useContext(LanguageContext);
  let requestCount = React.useRef(0);

  const getOptions = React.useCallback((input) => (
      !input
        ? Promise.resolve({ options: [] })
        : request(`${api}api/v1/es_search/?keyword=${input}`)
          .then(data => {
            const options = data.hits.map(o => {
              const d = o._source;
              const value = getUriForType(d.type, d.id, d);
              const date = d.date ? ` (${isoDate(d.date)})` : '';
              const label = `${u(d.type)}: ${d.name}${date}`;
              return {
                value,
                label
              };
            }).filter(Boolean);
            return { options };
          })
  ), []);

  const slowLoad = React.useCallback((input) => {
    let { current: i } = requestCount;
    i += 1;
    let mirror = i;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (i === mirror) {
          return resolve(getOptions(input));
        } else {
          return resolve({ options: [] });
        }
      }, 500);
    });
  }, [requestCount, getOptions]);

  const handleSelect = React.useCallback(({ value }) => {
    history.push(value);
  }, [history]);

  return (
    <div className='desktop__header'>
      <header className='page__header' role='banner'>
        <div className='page__header__inner__wrap'>
          <div className='inner'>
            <div className='page__headline'>
              <h1 className='page__title'>
                <Link to='/' title={strings.headerVisitPageTooltip}>
                  <img src='/assets/graphics/layout/go-logo-2020.svg' alt={strings.headerLogoAltText} className="logo-main" />
                  <Translate
                    stringId="headerAppName"
                  />
                </Link>
              </h1>
            </div>
            <nav className='page__meta-nav' role='navigation'>
              <LanguageSelect />
              <Link to='/about' title={strings.headerMenuResourceTooltip} className='page__meta-nav-elements'>
                <Translate stringId="headerMenuResources" />
              </Link>
              <UserMenu />
              <Link to='/reports/new' className='button button--small button--primary-bounded' title={strings.headerCreateFieldReportTooltip}>
                <Translate stringId="headerCreateFieldReportLabel" />
              </Link>
            </nav>
          </div>
        </div>
        <div className='inner'>
          <nav className='page__prime-nav' role='navigation'>
            <ul className='nav-global-menu'>
              <li>
                <NavLink to='/' title={strings.headerMenuHomeTooltip} activeClassName='navbar-highlighted' exact>
                  <Translate stringId='headerMenuHome' />
                </NavLink>
              </li>
              <li>
                <HeaderRegionButton id='regions-menu' currentPath={match} />
              </li>
              <li>
                <NavLink to='/emergencies' title={strings.headerMenuEmergenciesTooltip} activeClassName='navbar-highlighted' exact>
                  <Translate stringId="headerMenuEmergencies" />
                </NavLink>
              </li>
              <li>
                <NavLink to='/deployments' title={strings.headerMenuDeploymentsTooltip} activeClassName='navbar-highlighted' exact>
                  <Translate stringId="headerMenuDeployments" />
                </NavLink>
              </li>
              <li>
                <NavLink to='/preparedness' title={strings.headerMenuPreparednessTooltip} activeClassName='navbar-highlighted' exact>
                  <Translate stringId="headerMenuPreparedness" />
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='nav-global-search'>
            <form className='gsearch'>
              <div>
                <label className='form__label'>
                  <Translate stringId="headerSearchLabel" />
                </label>
                <Select.Async
                  placeholder={strings.headerSearchPlaceholder}
                  onChange={handleSelect}
                  filterOptions={noFilter}
                  autoload={false}
                  cache={false}
                  loadOptions={slowLoad} />
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

if (environment !== 'production') {
  Header.propTypes = {
    history: T.object,
    match: T.object
  };
}

export default withRouter(Header);
