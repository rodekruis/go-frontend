'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { environment } from '../config';
import { Helmet } from 'react-helmet';
import { PropTypes as T } from 'prop-types';
import {
  getAppeals
} from '../actions';
import { Link } from 'react-router-dom';
// import {
//   FormInput,
//   FormTextarea,
//   FormRadioGroup,
//   FormSelect,
//   FormError
// } from '../../components/form-elements/';
import App from './app';
import AppealsTable from '../components/connected/appeals-table';
import { appealTypes, appealTypeOptions } from '../utils/appeal-type-constants';
import { showGlobalLoading, hideGlobalLoading } from '../components/global-loading';

class Appeals extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: null
    };
  }

  componentWillReceiveProps (nextProps) {

  }

  componentDidMount () {
    this.props._getAppeals();
  }

  onSubmit (e) {

  }

  onFieldChange (field, e) {

  }

  renderTableData (data, fetched) {
    if (fetched) {
      return data.results.map((appeal, index) => {
        const { atype, code, name } = appeal;
        return (
          <tr key={appeal.id}>
            <td>
              <Link to={`/appeal/${appeal.id}`} className='link--primary' title='View Appeal'>{code}</Link>
            </td>
            <td>{appealTypes[atype]}</td>
            <td>{name}</td>
          </tr>
        );
      });
    }
  }

  render () {
    const {
      fetched,
      error,
      data
    } = this.props.appeals;

    return (
      <App className='page--appeals'>
        <Helmet>
          <title>IFRC Go - Appeals</title>
        </Helmet>
        <section className='inpage'>
          <header className='inpage__header'>
            <div className='inner'>
              <h1 className='inpage__title'>Appeals</h1>
            </div>
          </header>
          <div className='inpage__body'>
            <div className='inner'>
              <table className="table table--zebra">
                <tbody>
                  {this.renderTableData(data, fetched)}
                </tbody>
              </table>

              <AppealsTable
                showActive={false}
                showHomeMap={false}
                title={'Active Operations'}
                limit={10}
                viewAll={'/appeals/all'}
                fullscreen={false}
                toggleFullscreen={this.toggleFullscreen}
              />
            </div>
          </div>
        </section>
      </App>
    );
  }
}

if (environment !== 'production') {
  Appeals.propTypes = {
    _getAppeals: T.func,
    // _updateProject: T.func,
    // _getProjectById: T.func,
    appeals: T.object,
    // user: T.object,
    // report: T.object,
    // match: T.object,
    // history: T.object
  };
}

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const selector = (state, ownProps) => ({
  // projectForm: state.projectForm,
  // user: state.user,
  // report: _get(state.project, ownProps.match.params.id, {
  //   data: {},
  //   fetching: false,
  //   fetched: false
  // })
  appeals: state.appeals
});

const dispatcher = (dispatch) => ({
  _getAppeals: (...args) => dispatch(getAppeals(...args)),
  // _updateProject: (...args) => dispatch(updateProject(...args)),
  // _getProjectById: (...args) => dispatch(getProjectById(...args))
});

export default connect(selector, dispatcher)(Appeals);
