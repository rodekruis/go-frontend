import React from 'react';
import { environment } from '../../config';
import { PropTypes as T } from 'prop-types';
import InfoIcon from '../../../icons/collecticons/circle-information';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({title, description}) => {
  return (
    <React.Fragment>
      <a data-tip data-for='global' data-event='click focus'>
        <InfoIcon className='tooltip' />
      </a>
      <ReactTooltip
        className='tooltip'
        globalEventOff='click'
        id='global'
        aria-haspopup='true'
      >
        <header className='tooltip__header' >
          {title}
        </header>
        <span className='tooltip__text' >
          {description}
        </span>

      </ReactTooltip>
    </React.Fragment>
  );
};

export default Tooltip;

if (environment !== 'production') {
  Tooltip.propTypes = {
    title: T.string,
    description: T.string
  };
}
