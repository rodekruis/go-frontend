'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { environment } from '../config';
import { Helmet } from 'react-helmet';
import { PropTypes as T } from 'prop-types';
import {
  getAppealById
} from '../actions';
// import {
//   FormInput,
//   FormTextarea,
//   FormRadioGroup,
//   FormSelect,
//   FormError
// } from '../../components/form-elements/';
import App from './app';
import Select from 'react-select';
import { appealTypes, appealTypeOptions } from '../utils/appeal-type-constants';
import { disasterType } from '../utils/field-report-constants';
import { showGlobalLoading, hideGlobalLoading } from '../components/global-loading';

class Appeal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appealTypeOptionList: appealTypeOptions.slice(1),
      disasterTypeOptionList: disasterType.slice(1),
      disasterType: -1,
      atype: 0,
      errors: null
    };

    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount () {
    showGlobalLoading();
    this.props._getAppealById(3180);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.appeal.fetched) {
      const appeal = nextProps.appeal.data.results[0];

      hideGlobalLoading();
      this.setState({
        disasterType: appeal.dtype.id,
        atype: appeal.atype
      });
    }
  }

  // onSubmit (e) {

  // }

  onFieldChange (field, e) {
    let val = e && e.target ? e.target.value : e;

    if (field === 'disasterType' || field === 'atype') {
      val = val.value;
    }

    let changedObj = {};
    changedObj[field] = val;
    console.log(changedObj);

    this.setState(changedObj);
  }

  renderContent () {
    const { fetched } = this.props.appeal;
    const appeal = fetched ? this.props.appeal.data.results[0] : undefined;

    if (fetched) {
      return (
        <React.Fragment>
          {this.renderHelmet(appeal)}
          {this.renderBody(appeal)}
        </React.Fragment>
      );
    } else {
      return (<div></div>);
    }
  }

  renderHelmet (appeal) {
    const helmetContent = appeal
      ? (
        <Helmet>
          <title>IFRC Go - Appeal - {appeal.name}</title>
        </Helmet>
      )
      : (<div></div>);

    return helmetContent;
  }

  renderHeader (appeal) {
    const headerContent = appeal
      ? (
        <header className='inpage__header'>
          <div className='inner'>
            <h1 className='inpage__title'>{appeal.name}</h1>
          </div>
        </header>
      )
      : (<div></div>);

    return headerContent;
  }

  renderBody (appeal) {
    return (
      <section className='inpage'>
        {this.renderHeader(appeal)}
        <div className='inpage__body'>
          <div className='inner'>
            <form className='form'>
              <div className='form-group'>
                <div className='form__inner-header'>
                  <label className='form__label'>Disaster Type</label>
                </div>
                <div className='form_inner-body'>
                  <Select
                    placeholder='Select a disaster type'
                    name='disaster-type'
                    id='disaster-type'
                    options={this.state.disasterTypeOptionList}
                    value={this.state.disasterType}
                    onChange={this.onFieldChange.bind(this, 'disasterType')}
                  />
                </div>
              </div>

              <div className='form-group'>
                <div className='form__inner-header'>
                  <label className='form__label'>Appeal Type</label>
                </div>
                <div className='form_inner-body'>
                  <Select
                    placeholder='Select a disaster type'
                    name='disaster-type'
                    id='disaster-type'
                    options={this.state.appealTypeOptionList}
                    value={this.state.atype}
                    onChange={this.onFieldChange.bind(this, 'atype')}
                  />
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    );
  }

  render () {
    return (
      <App className='page--appeals'>
        {this.renderContent()}
      </App>
    );
  }
}

// TODO: make an input for all other Appeal fields
// dropdown: atype, status, event, country
// text: aid, code, sector, region (not editable)
// num: num beneficiaries, amount requested, funded
// date: start date, end date
// checkbox: needs confirmation
// list: appeal documents

if (environment !== 'production') {
  Appeal.propTypes = {
    _getAppealById: T.func,
    // _updateProject: T.func,
    // _getProjectById: T.func,
    appeal: T.object
  };
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const selector = (state, ownProps) => ({
  appeal: state.appeal
});

const dispatcher = (dispatch) => ({
  _getAppealById: (...args) => dispatch(getAppealById(...args)),
  // _updateProject: (...args) => dispatch(updateProject(...args)),
  // _getProjectById: (...args) => dispatch(getProjectById(...args))
});

export default connect(selector, dispatcher)(Appeal);
