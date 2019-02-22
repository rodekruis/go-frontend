'use strict';

import React from 'react';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';
import { environment } from '../config';
import { regions } from '../utils/region-constants';
import { PropTypes as T } from 'prop-types';

const regionArray = Object.keys(regions).map(k => regions[k]);

class HeaderRegionButton extends React.Component {
  construct () {
    this.decideTitle = this.decideTitle.bind(this);
    this.decideTriggerClassName = this.decideTriggerClassName.bind(this);
  }

  decideTitle (currentPath) {
    if (currentPath.url.includes('/regions')) {
      return regionArray[currentPath.params['id']].name;
    }

    return 'Regions';
  }

  decideTriggerClassName (currentPath) {
    let className = 'drop__toggle--caret';

    if (currentPath.path.includes('/region')) {
      className += ' navbar-highlighted';
    }

    return className;
  }

  render () {
    const { id, currentPath } = this.props;
    const title = this.decideTitle(currentPath);
    const regions = regionArray.map(o => ({to: `/regions/${o.id}`, text: o.name}));
    const triggerClassName = this.decideTriggerClassName(currentPath);

    return (
      <Dropdown
        id={id}
        triggerClassName={triggerClassName}
        triggerActiveClassName='active'
        triggerText={title}
        triggerTitle={`View ${title}`}
        triggerElement='a'
        direction='down'
        alignment='center' >
        <ul className='drop__menu' role='menu'>
          {regions.map(o => (
            <li key={o.to}><Link to={o.to} className='drop__menu-item' title={`View ${o.text}`} data-hook='dropdown:close'>{o.text}</Link></li>
          ))}
        </ul>
      </Dropdown>
    );
  }
}

if (environment !== 'production') {
  HeaderRegionButton.propTypes = {
    id: T.string,
    currentPath: T.object
  };
}

export default HeaderRegionButton;