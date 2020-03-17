'use strict';

import React from 'react';
import { environment } from '../../config';
import { PropTypes as T } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPerProcessType } from './../../utils/get-per-process-type';
import Fold from './../fold';

// Ref: https://github.com/IFRCGo/go-api/blob/master/per/models.py#L26 
const PER_PHASES = {
  'b': 'Phase Not Set',
  'c': 'Baseline',
  'd': 'Orientation',
  'a': 'Assessment',
  'f': 'Prioritization',
  'y': 'Plan of Action',
  'x': 'Action and Accountability'
};

class PreparednessSetPhase extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedPhase: props.currentPhase
    };
  }

  updatePhase = () => {
    const { selectedPhase } = this.state;
    this.props.onChange(selectedPhase);
  }

  phaseChanged = (event) => {
    const phase = event.target.value;
    this.setState({ selectedPhase: phase });
  }

  render () {
    const { selectedPhase } = this.state;
    return (
      <Fold id="set-per-phase" title="Update Current PER Phase">
        <select name="set-per-phase" onChange={ this.phaseChanged } value={ selectedPhase }>
        {
          Object.keys(PER_PHASES).sort((x, y) => Number(x) - Number(y)).map(key => {
            return (
              <option value={key} key={key}>{ PER_PHASES[key] }</option>
            );
          })
        }
        </select>
        <button onClick={ this.updatePhase }>Update Phase</button>
      </Fold>
    );
  }
}

if (environment !== 'production') {
  PreparednessSetPhase.propTypes = {
    currentPhase: T.object,
    onChange: T.function
  };
}

export default PreparednessSetPhase;
