'use strict';
import { combineReducers } from 'redux';
import _groupBy from 'lodash.groupby';
import _cloneDeep from 'lodash.clonedeep';

import { getCountryMeta } from '../utils/get-country-meta';
import { stateInflight, stateError, stateSuccess } from '../utils/reducer-utils';
import { getCentroid } from '../utils/country-centroids';

const initialState = {
  fetching: false,
  fetched: false,
  receivedAt: null,
  data: {}
};

function eru (state = initialState, action) {
  switch (action.type) {
    case 'GET_DEPLOYMENT_ERU_INFLIGHT':
      state = stateInflight(state, action);
      break;
    case 'GET_DEPLOYMENT_ERU_FAILED':
      state = stateError(state, action);
      break;
    case 'GET_DEPLOYMENT_ERU_SUCCESS':
      state = stateSuccess(state, action);
      break;
  }
  return state;
}

function fact (state = initialState, action) {
  switch (action.type) {
    case 'GET_DEPLOYMENT_FACT_INFLIGHT':
      state = stateInflight(state, action);
      break;
    case 'GET_DEPLOYMENT_FACT_FAILED':
      state = stateError(state, action);
      break;
    case 'GET_DEPLOYMENT_FACT_SUCCESS':
      state = stateSuccess(state, action);
      break;
  }
  return state;
}

function heop (state = initialState, action) {
  switch (action.type) {
    case 'GET_DEPLOYMENT_HEOP_INFLIGHT':
      state = stateInflight(state, action);
      break;
    case 'GET_DEPLOYMENT_HEOP_FAILED':
      state = stateError(state, action);
      break;
    case 'GET_DEPLOYMENT_HEOP_SUCCESS':
      state = stateSuccess(state, action);
      break;
  }
  return state;
}

function rdrt (state = initialState, action) {
  switch (action.type) {
    case 'GET_DEPLOYMENT_RDRT_INFLIGHT':
      state = stateInflight(state, action);
      break;
    case 'GET_DEPLOYMENT_RDRT_FAILED':
      state = stateError(state, action);
      break;
    case 'GET_DEPLOYMENT_RDRT_SUCCESS':
      state = stateSuccess(state, action);
      break;
  }
  return state;
}

const geojsonInitialState = {
  fetchedCount: 0,
  fetchingCount: 0,
  data: {
    features: []
  },
  error: null
};

function geojson (state = geojsonInitialState, action) {
  switch (action.type) {
    case 'GET_ALL_DEPLOYMENT_ERU_INFLIGHT':
    case 'GET_ALL_DEPLOYMENT_FACT_INFLIGHT':
    case 'GET_ALL_DEPLOYMENT_HEOP_INFLIGHT':
    case 'GET_ALL_DEPLOYMENT_RDRT_INFLIGHT':
      state = {
        ...state,
        fetchingCount: state.fetchingCount + 1
      };
      break;
    case 'GET_ALL_DEPLOYMENT_ERU_FAILED':
    case 'GET_ALL_DEPLOYMENT_FACT_FAILED':
    case 'GET_ALL_DEPLOYMENT_HEOP_FAILED':
    case 'GET_ALL_DEPLOYMENT_RDRT_FAILED':
      state = {
        ...state,
        fetchingCount: state.fetchingCount - 1,
        fetchedCount: state.fetchedCount + 1,
        error: action.error
      };
      break;
    case 'GET_ALL_DEPLOYMENT_ERU_SUCCESS':
      state = updateGeoState(state, action, 'eru');
      break;
    case 'GET_ALL_DEPLOYMENT_FACT_SUCCESS':
      state = updateGeoState(state, action, 'fact');
      break;
    case 'GET_ALL_DEPLOYMENT_HEOP_SUCCESS':
      state = updateGeoState(state, action, 'heop');
      break;
    case 'GET_ALL_DEPLOYMENT_RDRT_SUCCESS':
      state = updateGeoState(state, action, 'rdrt');
      break;
  }
  return state;
}

function updateGeoState (state, action, type) {
  let features = _cloneDeep(state.data.features) || [];
  const groupper = type === 'eru' ? 'deployed_to.id' : 'country.id';
  const countryGroup = _groupBy(action.data.results, groupper);

  Object.keys(countryGroup).forEach(countryId => {
    let country = getCountryMeta(countryId);
    let feat = features.find(f => f.properties.countryIso === country.iso);
    const setCount = (feat) => {
      if (type === 'eru') {
        feat.properties.eru += countryGroup[countryId].reduce((acc, o) => acc + o.equipment_units, 0);
      } else {
        // Each entry is a unit.
        feat.properties[type] += countryGroup[countryId].length;
      }
    };

    if (feat) {
      setCount(feat);
    } else {
      feat = {
        type: 'Feature',
        properties: {
          fact: 0,
          rdrt: 0,
          heop: 0,
          eru: 0,
          countryIso: country.iso,
          countryId: countryId,
          countryName: country.label
        },
        geometry: {
          type: 'Point',
          coordinates: getCentroid(country.iso)
        }
      };
      setCount(feat);
      features.push(feat);
    }
  });

  return {
    fetchingCount: state.fetchingCount - 1,
    fetchedCount: state.fetchedCount + 1,
    error: null,
    data: {
      type: 'FeatureCollection',
      features
    }
  };
}

// Combined export.
export default combineReducers({
  eru,
  fact,
  heop,
  rdrt,
  geojson
});
