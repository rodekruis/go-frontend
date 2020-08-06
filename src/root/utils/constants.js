import { listToMap } from '@togglecorp/fujs';
import organizationalUnitJson from './organizational-unit.json';
import partnerJson from './partner.json';
import activityJson from './activity.json';
import subactivityJson from './subactivity.json';
import deliveryPointJson from './delivery-point.json';
import unitsOfMeasurementJson from './units-of-measurement.json';
import provinceJson from './province.json';
import districtJson from './district.json';
import municipalityJson from './municipality.json';
import beneficiaryTypeJson from './beneficiary-type.json';

export const NO_DATA = 'No data to display.';

export const organizationalUnitOptions = organizationalUnitJson;

export const partnerOptions = partnerJson;

export const activityOptions = activityJson;

export const subactivityOptions = subactivityJson;

export const unitsOfMeasurementOptions = unitsOfMeasurementJson;

export const provinceOptions = provinceJson;

export const districtOptions = districtJson;

export const municipalityOptions = municipalityJson;

export const deliveryPointOptions = deliveryPointJson;

export const beneficiaryTypeOptions = beneficiaryTypeJson;

export const programmeTypeList = [
  {
    key: '0',
    title: 'Bilateral'
  },
  {
    key: '1',
    title: 'Multilateral'
  },
  {
    key: '2',
    title: 'Domestic',
  }
];

export const programmeTypes = listToMap(programmeTypeList, d => d.key, d => d.title);

export const sectorList = [
  {
    key: '0',
    title: 'Health and Care',
    color: '#66c2a5',
    inputValue: '0',
  },
  {
    key: '1',
    title: 'Water Sanitation and Hygiene Promotion',
    color: '#fc8d62',
    inputValue: '1',
  },
  {
    key: '2',
    title: 'Risk Communication and Community Engagement and Accountability',
    color: '#8da0cb',
    inputValue: '2',
  },
  {
    key: '3',
    title: 'Protection, Gender and Inclusion',
    color: '#e78ac3',
    inputValue: '3',
  },
  {
    key: '4',
    title: 'Shelter',
    color: '#a6d854',
    inputValue: '4',
  },
  {
    key: '5',
    title: 'Planning, Monitoring, Evaluation, Reporting and Information Management',
    color: '#ffd92f',
    inputValue: '5',
  },
  {
    key: '6',
    title: 'National Society Development',
    color: '#e5c494',
    inputValue: '6',
  },
  {
    key: '7',
    title: 'Logistics and information technology',
    color: '#b3b3b3',
    inputValue: '7',
  },
  {
    key: '8',
    title: 'Human Resources and duty of care',
    color: '#b3b3b3',
    inputValue: '8',
  },
];

export const secondarySectorList = sectorList;

export const sectors = listToMap(sectorList, d => d.key, d => d.title);
export const sectorInputValues = listToMap(sectorList, d => d.key, d => d.inputValue);

export const secondarySectors = listToMap(secondarySectorList, d => d.key, d => d.title);
export const secondarySectorInputValues = listToMap(secondarySectorList, d => d.key, d => d.inputValue);

export const statusList = [
  {
    key: '0',
    title: 'Planned'
  },
  {
    key: '1',
    title: 'Ongoing'
  },
  {
    key: '2',
    title: 'Completed'
  }
];

export const statuses = listToMap(statusList, d => d.key, d => d.title);

export const operationTypeList = [
  { value: '0', label: 'Programme' },
  { value: '1', label: 'Emergency operation' },
];

export const operationTypes = {
  0: 'Programme',
  1: 'Emergency Operation',
};

export const projectVisibilityList = [
  { value: 'public', label: 'Public' },
  { value: 'logged_in_user', label: 'Logged in user' },
  { value: 'ifrc_only', label: 'IFRC only' },
];
