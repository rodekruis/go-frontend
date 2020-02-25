'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { environment } from '../config';
import { Helmet } from 'react-helmet';
import { PropTypes as T } from 'prop-types';
import {
  getAppealById
} from '../actions';
import {
  FormInput,
  FormTextarea,
  FormCheckbox,
  FormSelect,
  FormError
} from '../components/form-elements/';
import Fold from '../components/fold';
import App from './app';
import Select from 'react-select';
import _set from 'lodash.set';
import _cloneDeep from 'lodash.clonedeep';
import { appealTypes, appealTypeOptions } from '../utils/appeal-type-constants';
import { disasterType } from '../utils/field-report-constants';
import { appealStatusOptions } from '../utils/utils';
import { showGlobalLoading, hideGlobalLoading } from '../components/global-loading';

class Appeal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appeal: null,
      appealStatusOptionList: appealStatusOptions.slice(1),
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
      hideGlobalLoading();
      this.setState({
        appeal: nextProps.appeal.data.results[0]
      });
    }
  }

  // onSubmit (e) {

  // }

  onCheckChange (field, isTrue) {
    let appeal = _cloneDeep(this.state.appeal);
    _set(appeal, field, !isTrue);
    this.setState({appeal});
  }

  onFieldChange (field, fieldType, e) {
    let val = e && e.target ? e.target.value : e;
    let appeal = _cloneDeep(this.state.appeal);

    if (field === 'disasterType') {
      this.setState({
        appeal: {
          ...this.state.appeal,
          dtype: {
            id: val.value,
            name: val.label
          }
        }
      });
    } else {
      switch (fieldType) {
        case 'dropdown':
          val = Number(val.value);
          break;
        case 'number':
          val = Number(val);
          break;
        default:
          break;
      }

      _set(appeal, field, val === '' || val === null ? undefined : val);
      this.setState({appeal});
    }
  }

  renderContent () {
    const { fetched } = this.props.appeal;

    if (fetched) {
      console.log(this.state.appeal);
      return (
        <React.Fragment>
          {this.renderHelmet()}
          {this.renderBody()}
        </React.Fragment>
      );
    } else {
      return (<div></div>);
    }
  }

  renderHelmet () {
    return (
      <React.Fragment>
        <Helmet>
          <title>IFRC Go - Appeal - {this.state.appeal.name ? this.state.appeal.name : ''}</title>
        </Helmet>
      </React.Fragment>
    );
  }

  renderHeader () {
    return (
      <header className='inpage__header'>
        <div className='inner'>
          <h1 className='inpage__title'>{this.state.appeal.name}</h1>
        </div>
      </header>
    );
  }

  renderBody () {
    console.log(this.state.appeal);
    return (
      <section className='inpage'>
        {this.renderHeader()}

        <div className='inpage__body'>
          <div className='inner'>
            <form className='form'>
              <Fold title='General'>
                <FormInput
                  label='Aid'
                  type='text'
                  name='aid'
                  id='aid'
                  value={this.state.appeal.aid}
                  onChange={this.onFieldChange.bind(this, 'aid', '')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='aid'
                  />
                </FormInput>

                <FormInput
                  label='Code'
                  type='text'
                  name='code'
                  id='code'
                  value={this.state.appeal.code}
                  onChange={this.onFieldChange.bind(this, 'code', '')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='code'
                  />
                </FormInput>

                <FormInput
                  label='Number of beneficiaries'
                  type='number'
                  name='num_beneficiaries'
                  id='num_beneficiaries'
                  value={this.state.appeal.num_beneficiaries}
                  onChange={this.onFieldChange.bind(this, 'num_beneficiaries', 'number')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='num_beneficiaries'
                  />
                </FormInput>

                <FormInput
                  label='Amount requested'
                  type='number'
                  name='amount_requested'
                  id='amount_requested'
                  value={this.state.appeal.amount_requested}
                  onChange={this.onFieldChange.bind(this, 'amount_requested', 'number')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='amount_requested'
                  />
                </FormInput>

                <FormInput
                  label='Amount funded'
                  type='number'
                  name='amount_funded'
                  id='amount_funded'
                  value={this.state.appeal.amount_funded}
                  onChange={this.onFieldChange.bind(this, 'amount_funded', 'number')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='amount_funded'
                  />
                </FormInput>

                <FormInput
                  label='Start date'
                  type='date'
                  name='start_date'
                  id='start_date'
                  value={this.state.appeal.start_date}
                  onChange={this.onFieldChange.bind(this, 'start_date', '')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='start_date'
                  />
                </FormInput>

                <FormInput
                  label='End date'
                  type='date'
                  name='end_date'
                  id='end_date'
                  value={this.state.appeal.end_date}
                  onChange={this.onFieldChange.bind(this, 'end_date', '')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='end_date'
                  />
                </FormInput>

                <FormInput
                  label='Name'
                  type='text'
                  name='name'
                  id='name'
                  value={this.state.appeal.name}
                  onChange={this.onFieldChange.bind(this, 'name', '')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='name'
                  />
                </FormInput>

                <FormInput
                  label='Sector'
                  type='text'
                  name='sector'
                  id='sector'
                  value={this.state.appeal.sector}
                  onChange={this.onFieldChange.bind(this, 'sector', '')}
                  // description={'very description'}
                >
                  <FormError
                    errors={this.state.errors}
                    property='sector'
                  />
                </FormInput>

                <FormCheckbox
                  label='Needs confirmation'
                  name='needs_confirmation'
                  id='needs_confirmation'
                  value={this.state.appeal.needs_confirmation}
                  checked={this.state.appeal.needs_confirmation}
                  onChange={this.onCheckChange.bind(this, 'needs_confirmation', this.state.appeal.needs_confirmation)}
                  // description={o.description}
                />

                <div className='form__group'>
                  <div className='form__inner_header'>
                    <label className='form__label'>Status</label>
                  </div>
                  <div className='form__inner_body'>
                    <Select
                      placeholder='Select a status'
                      name='status'
                      id='status'
                      options={this.state.appealStatusOptionList}
                      value={this.state.appeal.status}
                      onChange={this.onFieldChange.bind(this, 'status', 'dropdown')}
                    />
                  </div>
                </div>

                <div className='form__group'>
                  <div className='form__inner_header'>
                    <label className='form__label'>Disaster Type</label>
                  </div>
                  <div className='form__inner_body'>
                    <Select
                      placeholder='Select a disaster type'
                      name='disaster-type'
                      id='disaster-type'
                      options={this.state.disasterTypeOptionList}
                      value={this.state.appeal.dtype.id}
                      onChange={this.onFieldChange.bind(this, 'disasterType', '')}
                    />
                  </div>
                </div>

                <div className='form__group'>
                  <div className='form__inner_header'>
                    <label className='form__label'>Appeal Type</label>
                  </div>
                  <div className='form__inner_body'>
                    <Select
                      placeholder='Select an Appeal type'
                      name='atype'
                      id='atype'
                      options={this.state.appealTypeOptionList}
                      value={this.state.appeal.atype}
                      onChange={this.onFieldChange.bind(this, 'atype', 'dropdown')}
                    />
                  </div>
                </div>
              </Fold>
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
// dropdown: event, country
// text: region (not editable)
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
