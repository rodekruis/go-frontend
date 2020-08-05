import React from 'react';
import Faram, {
  requiredCondition,
} from '@togglecorp/faram';
import _cs from 'classnames';
import { connect } from 'react-redux';
import memoize from 'memoize-one';
import {
  isFalsy,
  isInteger,
  isDefined,
} from '@togglecorp/fujs';

import BlockLoading from '#components/block-loading';

import SelectInput from '#components/form-elements/select-input';
import TextInput from '#components/form-elements/text-input';
import NumberInput from '#components/form-elements/number-input';
import DateInput from '#components/form-elements/date-input';
import Checkbox from '#components/form-elements/faram-checkbox';
import TextOutput from '#components/text-output';
import LanguageContext from '#root/languageContext';
import Translate from '#components/Translate';

import {
  getCountries,
  getDistrictsForCountryPF,
  getEventList,
  postProject,
} from '#actions';

import {
  disasterTypeList,
} from '#utils/field-report-constants';

import {
  // statusList,
  statuses,
  organizationalUnitOptions,
  partnerOptions,
  sectorList,
  secondarySectorInputValues,
  secondarySectorList,
  activityOptions,
  subactivityOptions,
  unitsOfMeasurementOptions,
  districtOptions,
  municipalityOptions,
  provinceOptions,
  deliveryPointOptions,
  beneficiaryTypeOptions,
  programmeTypeList,
  operationTypeList,
  projectVisibilityList,
} from '#utils/constants';

const positiveIntegerCondition = (value) => {
  const ok = (value === undefined || value === '') || ((!Number.isNaN(value)) && (isFalsy(value) || isInteger(+value)) && (+value >= 0));
  return {
    ok,
    message: 'Value must be a positive integer',
  };
};

const compareString = (a, b) => a.label.localeCompare(b.label);

/*
const statusOptions = statusList.map(p => ({
  value: p.key,
  label: p.title,
})).sort(compareString);
*/

const sectorOptions = sectorList.map(p => ({
  value: p.inputValue,
  label: p.title,
})).sort(compareString);

const secondarySectorOptions = secondarySectorList.map(p => ({
  value: p.inputValue,
  label: p.title,
})).sort(compareString);

const programmeTypeOptions = programmeTypeList.map(p => ({
  value: p.key,
  label: p.title,
})).sort(compareString);

const disasterTypeOptions = disasterTypeList.map(d => ({
  value: d.value,
  label: d.label,
})).sort(compareString);

const operationTypeOptions = [...operationTypeList].sort(compareString);
const projectVisibilityOptions = [...projectVisibilityList].sort(compareString);

const InputSection = (p) => {
  const {
    className,
    title,
    children,
    helpText,
    tooltip,
  } = p;

  return (
    <div className={_cs(className, 'project-form-input-section')}>
      <div
        className='section-title'
        title={tooltip}
      >
        <div className='tc-title'>
          { title }
        </div>
        { helpText && (
          <div className='tc-help-text'>
            { helpText }
          </div>
        )}
      </div>
      <div className='section-content'>
        { children }
      </div>
    </div>
  );
};

const emptyList = [];
const emptyObject = [];

const invalidEndDateError = {
  end_date: 'End date must be greater than start date',
};
const validateDate = (start, end) => {
  if (!start || !end) {
    return emptyObject;
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate.getTime() >= endDate.getTime()) {
    return invalidEndDateError;
  }

  return emptyObject;
};

class ProjectForm extends React.PureComponent {
  constructor (props) {
    super(props);

    this.defaultSchema = {
      fields: {
        is_project_completed: [],
        actual_expenditure: [requiredCondition, positiveIntegerCondition],
        budget_amount: [requiredCondition, positiveIntegerCondition],
        project_country: [],
        event: [],
        dtype: [],
        project_districts: [requiredCondition],
        name: [requiredCondition],
        operation_type: [requiredCondition],
        primary_sector: [requiredCondition],
        programme_type: [requiredCondition],
        end_date: [requiredCondition],
        start_date: [requiredCondition],
        // reached_other: [positiveIntegerCondition],
        // reached_female: [positiveIntegerCondition],
        // reached_male: [positiveIntegerCondition],
        // reached_lgbtiq: [positiveIntegerCondition],
        // reached_total: [positiveIntegerCondition],
        reporting_ns: [requiredCondition],
        organizational_unit: [requiredCondition],
        partner: [requiredCondition],
        activity: [requiredCondition],
        subactivity: [requiredCondition],
        units_measurement_metric: [requiredCondition],
        units_quantity: [requiredCondition, positiveIntegerCondition],
        where_province: [requiredCondition],
        where_district: [requiredCondition],
        where_municipality: [],
        where_ward: [positiveIntegerCondition],
        where_delivery_service_place: [requiredCondition],
        where_delivery_service_name: [],
        beneficiary_type: [requiredCondition],
        secondary_sectors: [],
        status: [requiredCondition],
        target_other: [positiveIntegerCondition],
        target_female: [positiveIntegerCondition],
        target_male: [positiveIntegerCondition],
        target_lgbtiq: [positiveIntegerCondition],
        target_total: [requiredCondition, positiveIntegerCondition],
        visibility: [requiredCondition],
        // target_lgbtiq_00_05: [positiveIntegerCondition],
        // target_lgbtiq_06_12: [positiveIntegerCondition],
        // target_lgbtiq_13_17: [positiveIntegerCondition],
        // target_lgbtiq_18_29: [positiveIntegerCondition],
        // target_lgbtiq_30_39: [positiveIntegerCondition],
        // target_lgbtiq_40_49: [positiveIntegerCondition],
        // target_lgbtiq_50_59: [positiveIntegerCondition],
        // target_lgbtiq_60_69: [positiveIntegerCondition],
        // target_lgbtiq_70_79: [positiveIntegerCondition],
        // target_lgbtiq_80_plus: [positiveIntegerCondition],
        target_female_00_05: [positiveIntegerCondition],
        target_female_06_12: [positiveIntegerCondition],
        target_female_13_17: [positiveIntegerCondition],
        target_female_18_29: [positiveIntegerCondition],
        target_female_30_39: [positiveIntegerCondition],
        target_female_40_49: [positiveIntegerCondition],
        target_female_50_59: [positiveIntegerCondition],
        target_female_60_69: [positiveIntegerCondition],
        target_female_70_79: [positiveIntegerCondition],
        target_female_80_plus: [positiveIntegerCondition],
        target_male_00_05: [positiveIntegerCondition],
        target_male_06_12: [positiveIntegerCondition],
        target_male_13_17: [positiveIntegerCondition],
        target_male_18_29: [positiveIntegerCondition],
        target_male_30_39: [positiveIntegerCondition],
        target_male_40_49: [positiveIntegerCondition],
        target_male_50_59: [positiveIntegerCondition],
        target_male_60_69: [positiveIntegerCondition],
        target_male_70_79: [positiveIntegerCondition],
        target_male_80_plus: [positiveIntegerCondition],
        target_pregnant_women: [positiveIntegerCondition],
        target_people_with_disability: [positiveIntegerCondition],
        // reached_lgbtiq_00_05: [positiveIntegerCondition],
        // reached_lgbtiq_06_12: [positiveIntegerCondition],
        // reached_lgbtiq_13_17: [positiveIntegerCondition],
        // reached_lgbtiq_18_29: [positiveIntegerCondition],
        // reached_lgbtiq_30_39: [positiveIntegerCondition],
        // reached_lgbtiq_40_49: [positiveIntegerCondition],
        // reached_lgbtiq_50_59: [positiveIntegerCondition],
        // reached_lgbtiq_60_69: [positiveIntegerCondition],
        // reached_lgbtiq_70_79: [positiveIntegerCondition],
        // reached_lgbtiq_80_plus: [positiveIntegerCondition],
        // reached_female_00_05: [positiveIntegerCondition],
        // reached_female_06_12: [positiveIntegerCondition],
        // reached_female_13_17: [positiveIntegerCondition],
        // reached_female_18_29: [positiveIntegerCondition],
        // reached_female_30_39: [positiveIntegerCondition],
        // reached_female_40_49: [positiveIntegerCondition],
        // reached_female_50_59: [positiveIntegerCondition],
        // reached_female_60_69: [positiveIntegerCondition],
        // reached_female_70_79: [positiveIntegerCondition],
        // reached_female_80_plus: [positiveIntegerCondition],
        // reached_male_00_05: [positiveIntegerCondition],
        // reached_male_06_12: [positiveIntegerCondition],
        // reached_male_13_17: [positiveIntegerCondition],
        // reached_male_18_29: [positiveIntegerCondition],
        // reached_male_30_39: [positiveIntegerCondition],
        // reached_male_40_49: [positiveIntegerCondition],
        // reached_male_50_59: [positiveIntegerCondition],
        // reached_male_60_69: [positiveIntegerCondition],
        // reached_male_70_79: [positiveIntegerCondition],
        // reached_male_80_plus: [positiveIntegerCondition],
        // reached_pregnant_women: [positiveIntegerCondition],
        // reached_people_with_disability: [positiveIntegerCondition],
      },
    };

    const { projectData = {} } = props;
    const getDefaultDistrictValue = (district) => {
      if (Array.isArray(district)) {
        return district;
      }

      if (isDefined(district)) {
        return [district];
      }

      return [2239, 2240, 2241, 2242, 2243];
    };

    this.state = {
      faramValues: {
        actual_expenditure: projectData.actual_expenditure,
        budget_amount: projectData.budget_amount,
        project_country: props.countryId,
        event: projectData.event,
        dtype: projectData.dtype,
        project_districts: getDefaultDistrictValue(projectData.project_districts),
        name: projectData.name,
        operation_type: projectData.operation_type,
        primary_sector: projectData.primary_sector,
        programme_type: projectData.programme_type,
        end_date: projectData.end_date,
        start_date: projectData.start_date,
        // reached_lgbtiq: projectData.reached_lgbtiq || 0,
        // reached_other: projectData.reached_other || 0,
        // reached_female: projectData.reached_female || 0,
        // reached_male: projectData.reached_male || 0,
        // reached_total: projectData.reached_total || 0,
        reporting_ns: projectData.reporting_ns,
        organizational_unit: projectData.organizational_unit,
        partner: projectData.partner,
        activity: projectData.activity,
        subactivity: projectData.subactivity,
        units_measurement_metric: projectData.units_measurement_metric,
        units_quantity: projectData.units_quantity,
        where_province: projectData.where_province,
        where_district: projectData.where_district,
        where_municipality: projectData.where_municipality,
        where_ward: projectData.where_ward,
        where_delivery_service_place: projectData.where_delivery_service_place,
        where_delivery_service_name: projectData.where_delivery_service_name,
        beneficiary_type: projectData.beneficiary_type,
        secondary_sectors: projectData.secondary_sectors ? projectData.secondary_sectors.map(d => secondarySectorInputValues[d]) : [],
        is_project_completed: projectData.status === 2,
        status: projectData.status,
        target_lgbtiq: projectData.target_lgbtiq || 0,
        target_other: projectData.target_other || 0,
        target_female: projectData.target_female || 0,
        target_male: projectData.target_male || 0,
        target_total: projectData.target_total || 0,
        visibility: projectData.visibility || 'public',
        // target_lgbtiq_00_05: projectData.target_lgbtiq_00_05 || undefined,
        // target_lgbtiq_06_12: projectData.target_lgbtiq_06_12 || undefined,
        // target_lgbtiq_13_17: projectData.target_lgbtiq_13_17 || undefined,
        // target_lgbtiq_18_29: projectData.target_lgbtiq_18_29 || undefined,
        // target_lgbtiq_30_39: projectData.target_lgbtiq_30_39 || undefined,
        // target_lgbtiq_40_49: projectData.target_lgbtiq_40_49 || undefined,
        // target_lgbtiq_50_59: projectData.target_lgbtiq_50_59 || undefined,
        // target_lgbtiq_60_69: projectData.target_lgbtiq_60_69 || undefined,
        // target_lgbtiq_70_79: projectData.target_lgbtiq_70_79 || undefined,
        // target_lgbtiq_80_plus: projectData.target_lgbtiq_80_plus || undefined,
        target_female_00_05: projectData.target_female_00_05 || undefined,
        target_female_06_12: projectData.target_female_06_12 || undefined,
        target_female_13_17: projectData.target_female_13_17 || undefined,
        target_female_18_29: projectData.target_female_18_29 || undefined,
        target_female_30_39: projectData.target_female_30_39 || undefined,
        target_female_40_49: projectData.target_female_40_49 || undefined,
        target_female_50_59: projectData.target_female_50_59 || undefined,
        target_female_60_69: projectData.target_female_60_69 || undefined,
        target_female_70_79: projectData.target_female_70_79 || undefined,
        target_female_80_plus: projectData.target_female_80_plus || undefined,
        target_male_00_05: projectData.target_male_00_05 || undefined,
        target_male_06_12: projectData.target_male_06_12 || undefined,
        target_male_13_17: projectData.target_male_13_17 || undefined,
        target_male_18_29: projectData.target_male_18_29 || undefined,
        target_male_30_39: projectData.target_male_30_39 || undefined,
        target_male_40_49: projectData.target_male_40_49 || undefined,
        target_male_50_59: projectData.target_male_50_59 || undefined,
        target_male_60_69: projectData.target_male_60_69 || undefined,
        target_male_70_79: projectData.target_male_70_79 || undefined,
        target_male_80_plus: projectData.target_male_80_plus || undefined,
        target_pregnant_women: projectData.target_pregnant_women || undefined,
        target_people_with_disability: projectData.target_people_with_disability || undefined,
        // reached_lgbtiq_00_05: projectData.reached_lgbtiq_00_05 || undefined,
        // reached_lgbtiq_06_12: projectData.reached_lgbtiq_06_12 || undefined,
        // reached_lgbtiq_13_17: projectData.reached_lgbtiq_13_17 || undefined,
        // reached_lgbtiq_18_29: projectData.reached_lgbtiq_18_29 || undefined,
        // reached_lgbtiq_30_39: projectData.reached_lgbtiq_30_39 || undefined,
        // reached_lgbtiq_40_49: projectData.reached_lgbtiq_40_49 || undefined,
        // reached_lgbtiq_50_59: projectData.reached_lgbtiq_50_59 || undefined,
        // reached_lgbtiq_60_69: projectData.reached_lgbtiq_60_69 || undefined,
        // reached_lgbtiq_70_79: projectData.reached_lgbtiq_70_79 || undefined,
        // reached_lgbtiq_80_plus: projectData.reached_lgbtiq_80_plus || undefined,
        // reached_female_00_05: projectData.reached_female_00_05 || undefined,
        // reached_female_06_12: projectData.reached_female_06_12 || undefined,
        // reached_female_13_17: projectData.reached_female_13_17 || undefined,
        // reached_female_18_29: projectData.reached_female_18_29 || undefined,
        // reached_female_30_39: projectData.reached_female_30_39 || undefined,
        // reached_female_40_49: projectData.reached_female_40_49 || undefined,
        // reached_female_50_59: projectData.reached_female_50_59 || undefined,
        // reached_female_60_69: projectData.reached_female_60_69 || undefined,
        // reached_female_70_79: projectData.reached_female_70_79 || undefined,
        // reached_female_80_plus: projectData.reached_female_80_plus || undefined,
        // reached_male_00_05: projectData.reached_male_00_05 || undefined,
        // reached_male_06_12: projectData.reached_male_06_12 || undefined,
        // reached_male_13_17: projectData.reached_male_13_17 || undefined,
        // reached_male_18_29: projectData.reached_male_18_29 || undefined,
        // reached_male_30_39: projectData.reached_male_30_39 || undefined,
        // reached_male_40_49: projectData.reached_male_40_49 || undefined,
        // reached_male_50_59: projectData.reached_male_50_59 || undefined,
        // reached_male_60_69: projectData.reached_male_60_69 || undefined,
        // reached_male_70_79: projectData.reached_male_70_79 || undefined,
        // reached_male_80_plus: projectData.reached_male_80_plus || undefined,
        // reached_pregnant_women: projectData.reached_pregnant_women || undefined,
        // reached_people_with_disability: projectData.reached_people_with_disability || undefined,
      },
      faramErrors: {},
    };

    this.props._getDistricts(props.countryId);
  }

  componentDidMount () {
    this.props._getCountries();

    if (this.props.countryId) {
      this.props._getEventList(this.props.countryId);
    }
  }

  getResultsFromResponse = (response, defaultValue = emptyList) => {
    const {
      fetched,
      data
    } = response || emptyObject;

    if (!fetched || !data || !data.results || !data.results.length) {
      return defaultValue;
    }

    return response.data.results;
  }

  getCountryAndNationalSocietyOptions = (countries) => {
    const countryList = this.getResultsFromResponse(countries);

    const nationalSocietyOptions = countryList
      .filter(d => d.society_name)
      .map(d => ({
        value: d.id,
        label: d.society_name,
      })).sort(compareString);

    const countryOptions = countryList
      .filter(d => d.iso)
      .map(d => ({
        value: d.id,
        label: d.name,
      })).sort(compareString);

    return {
      nationalSocietyOptions,
      countryOptions,
    };
  }

  getDistrictOptions = (districtResponse, countryId) => {
    if (!districtResponse) {
      return emptyList;
    }

    const currentDistrictResponse = districtResponse[countryId];
    if (!currentDistrictResponse) {
      return emptyList;
    }

    const districtList = this.getResultsFromResponse(currentDistrictResponse, emptyObject);
    if (!districtList) {
      return emptyList;
    }

    const mappedDistrictList = districtList.map(d => ({
      value: d.id,
      label: d.name,
    })).sort(compareString);

    /*
    mappedDistrictList.unshift({
      value: 'all',
      label: 'Countrywide',
    });
    */

    return mappedDistrictList;
  }

  getCurrentOperationOptions = (response) => {
    const currentOperationList = this.getResultsFromResponse(response);

    if (!currentOperationList) {
      return emptyList;
    }

    const currentOperationOptions = currentOperationList.map(d => ({
      value: d.id,
      label: d.name,
    }));

    const operationToDisasterMap = {};
    currentOperationList.forEach(d => { operationToDisasterMap[d.id] = (d.dtype || {}).id; });

    const currentEmergencyOperationOptions = currentOperationList
      .filter(d => d.auto_generated_source === 'New field report')
      .map(d => ({
        value: d.id,
        label: d.name,
      }));

    return {
      currentOperationOptions,
      currentEmergencyOperationOptions,
      operationToDisasterMap,
    };
  }

  getProjectStatusFaramValue = memoize((start, isCompleted) => {
    if (isCompleted) {
      return { status: '2' };
    }

    if (!start) {
      return { status: undefined };
    }

    const startDate = new Date(start);
    const today = new Date();

    if (startDate.getTime() <= today.getTime()) {
      return { status: '1' };
    }

    return { status: '0' };
  })

  getSubtotalFaramValue = memoize((key, age_00_05, age_06_12, age_13_17, age_18_29, age_30_39, age_40_49, age_50_59, age_60_69, age_70_79, age_80_plus) => {
    if (isFalsy(age_00_05) && isFalsy(age_06_12) && isFalsy(age_13_17) && isFalsy(age_18_29) && isFalsy(age_30_39) && isFalsy(age_40_49) && isFalsy(age_50_59) && isFalsy(age_60_69) && isFalsy(age_70_79) && isFalsy(age_80_plus)) {
        return {};
    }

    let total_object = {};
    total_object[key] = (+age_00_05 || 0) + (+age_06_12 || 0) + (+age_13_17 || 0) + (+age_18_29 || 0) + (+age_30_39 || 0) + (+age_40_49 || 0) + (+age_50_59 || 0) + (+age_60_69 || 0) + (+age_70_79 || 0) + (+age_80_plus || 0);
    return total_object;
  })

  getTotalFaramValue = memoize((key, male, female, lgbtiq, other) => {
    if (isFalsy(male) && isFalsy(female) && isFalsy(lgbtiq) && isFalsy(other)) {
      return {};
    }

    let total_object = {};
    total_object[key] = (+male || 0) + (+female || 0) + (+lgbtiq || 0) + (+other || 0);
    return total_object;
  })

  handleFaramChange = (faramValues, faramErrors) => {
    const { faramValues: oldFaramValues } = this.state;
    const { eventList } = this.props;

    const extraFaramErrors = validateDate(faramValues.start_date, faramValues.end_date);
    const autoProjectStatus = this.getProjectStatusFaramValue(faramValues.start_date, faramValues.is_project_completed);
    const autoTargetedMaleTotal = this.getSubtotalFaramValue('target_male', faramValues.target_male_00_05, faramValues.target_male_06_12, faramValues.target_male_13_17, faramValues.target_male_18_29, faramValues.target_male_30_39, faramValues.target_male_40_49, faramValues.target_male_50_59, faramValues.target_male_60_69, faramValues.target_male_70_79, faramValues.target_male_80_plus);
    const autoTargetedFemaleTotal = this.getSubtotalFaramValue('target_female', faramValues.target_female_00_05, faramValues.target_female_06_12, faramValues.target_female_13_17, faramValues.target_female_18_29, faramValues.target_female_30_39, faramValues.target_female_40_49, faramValues.target_female_50_59, faramValues.target_female_60_69, faramValues.target_female_70_79, faramValues.target_female_80_plus);
    const autoTargetedLGBTIQTotal = this.getSubtotalFaramValue('target_lgbtiq', faramValues.target_lgbtiq_00_05, faramValues.target_lgbtiq_06_12, faramValues.target_lgbtiq_13_17, faramValues.target_lgbtiq_18_29, faramValues.target_lgbtiq_30_39, faramValues.target_lgbtiq_40_49, faramValues.target_lgbtiq_50_59, faramValues.target_lgbtiq_60_69, faramValues.target_lgbtiq_70_79, faramValues.target_lgbtiq_80_plus);
    const autoTargetedTotal = this.getTotalFaramValue('target_total', autoTargetedMaleTotal.target_male, autoTargetedFemaleTotal.target_female, autoTargetedLGBTIQTotal.target_lgbtiq, faramValues.target_other);
    const autoReachedMaleTotal = this.getSubtotalFaramValue('reached_male', faramValues.reached_male_00_05, faramValues.reached_male_06_12, faramValues.reached_male_13_17, faramValues.reached_male_18_29, faramValues.reached_male_30_39, faramValues.reached_male_40_49, faramValues.reached_male_50_59, faramValues.reached_male_60_69, faramValues.reached_male_70_79, faramValues.reached_male_80_plus);
    const autoReachedFemaleTotal = this.getSubtotalFaramValue('reached_female', faramValues.reached_female_00_05, faramValues.reached_female_06_12, faramValues.reached_female_13_17, faramValues.reached_female_18_29, faramValues.reached_female_30_39, faramValues.reached_female_40_49, faramValues.reached_female_50_59, faramValues.reached_female_60_69, faramValues.reached_female_70_79, faramValues.reached_female_80_plus);
    const autoReachedLGBTIQTotal = this.getSubtotalFaramValue('reached_lgbtiq', faramValues.reached_lgbtiq_00_05, faramValues.reached_lgbtiq_06_12, faramValues.reached_lgbtiq_13_17, faramValues.reached_lgbtiq_18_29, faramValues.reached_lgbtiq_30_39, faramValues.reached_lgbtiq_40_49, faramValues.reached_lgbtiq_50_59, faramValues.reached_lgbtiq_60_69, faramValues.reached_lgbtiq_70_79, faramValues.reached_lgbtiq_80_plus);
    const autoReachedTotal = this.getTotalFaramValue('reached_total', autoReachedMaleTotal.reached_male, autoReachedFemaleTotal.reached_female, autoReachedLGBTIQTotal.reached_lgbtiq, faramValues.reached_other);

    let newFaramValues = {
      ...faramValues,
      ...autoProjectStatus,
      ...autoTargetedMaleTotal,
      ...autoTargetedFemaleTotal,
      ...autoTargetedLGBTIQTotal,
      ...autoTargetedTotal,
      ...autoReachedMaleTotal,
      ...autoReachedFemaleTotal,
      ...autoReachedLGBTIQTotal,
      ...autoReachedTotal,
    };

    let newFaramErrors = {
      ...extraFaramErrors,
      ...faramErrors,
    };

    if (oldFaramValues.is_project_completed !== faramValues.is_project_completed && faramValues.is_project_completed && !isDefined(faramValues.actual_expenditure)) {
      newFaramValues.actual_expenditure = faramValues.budget_amount;
    }

    if (oldFaramValues.budget_amount !== faramValues.budget_amount) {
      newFaramValues.actual_expenditure = faramValues.budget_amount;
    }

    if (oldFaramValues.event !== faramValues.event) {
      const { operationToDisasterMap } = this.getCurrentOperationOptions(eventList);
      const dtype = operationToDisasterMap[faramValues.event];

      newFaramValues = {
        ...newFaramValues,
        dtype,
      };
    }

    if (oldFaramValues.project_country !== faramValues.project_country) {
      this.props._getDistricts(faramValues.project_country);
      this.props._getEventList(faramValues.project_country);

      newFaramValues = {
        ...newFaramValues,
        project_districts: [2239, 2240, 2241, 2242, 2243],
        event: undefined,
      };
    }

    this.setState({
      faramValues: newFaramValues,
      faramErrors: newFaramErrors,
    });
  }

  handleFaramValidationSuccess = (faramValues) => {
    const {
      projectData,
      _postProject,
    } = this.props;
    const data = { ...faramValues };

    if (projectData && projectData.id) {
      data['id'] = projectData.id;
    }

    _postProject(data);
  }

  handleFaramValidationFailure = (faramErrors) => {
    console.warn(faramErrors);
    this.setState({ faramErrors });
    alert('Please fill in all the required fields before submitting.');
  }

  getBudgetAndTotalNotRequired = (selectedNS, nsOptions) => {
    const ns = nsOptions.find(d => d.value === selectedNS);

    if (ns?.label === 'ICRC') {
      return true;
    }

    return false;
  }

  // Generate schema dynamically
  getSchema = memoize((operationType, programmeType, projectStatus, isBudgetAndTotalNotRequired) => {
    const schema = {
      fields: { ...this.defaultSchema.fields }
    };

    if (isBudgetAndTotalNotRequired) {
      schema.fields.budget_amount = [positiveIntegerCondition];
      schema.fields.actual_expenditure = [positiveIntegerCondition];
      schema.fields.target_total = [positiveIntegerCondition];
    }

    // operationType: 1 = Emergency operation
    // programmeType: 1 = Multilateral
    // programmeType: 2 = Domestic
    if (String(operationType) === '1' && (String(programmeType) === '1' || String(programmeType) === '2')) {
      schema.fields.event = [requiredCondition];
    }

    // projectStatus: 2 = Completed
    if (String(projectStatus) === '2' && !isBudgetAndTotalNotRequired) {
      schema.fields.reached_total = [requiredCondition, positiveIntegerCondition];
      schema.fields.budget_amount = [positiveIntegerCondition];
    }

    return schema;
  });

  getFilteredSecondarySectorOptions = memoize((sector) => (
    secondarySectorOptions.filter(d => d.value !== sector)
  ));

  getFilteredSubactivityOptions = memoize((activity) => (
    subactivityOptions.filter(subactivity => subactivity.activityValue.indexOf(activity) >= 0)
  ));

  getFilteredDistrictOptions = memoize((province) => (
    districtOptions.filter(district => district.provinceValue.indexOf(province) >= 0)
  ));

  getFilteredMunicipalityOptions = memoize((province, district) => (
    municipalityOptions.filter(municipality => municipality.provinceValue.indexOf(province) >= 0 && municipality.districtValue.indexOf(district) >= 0)
  ));

  handleSelectAllDistrictButtonClick = () => {
    const { districts } = this.props;
    const {
      faramValues,
      faramErrors,
    } = this.state;

    const districtOptions = this.getDistrictOptions(districts, faramValues.project_country);
    const newFaramValues = {
      ...faramValues,
      project_districts: districtOptions.map(d => d.value),
    };
    const newFaramErrors = {
      ...faramErrors,
      project_districts: undefined,
    };

    this.setState({
      faramValues: newFaramValues,
      faramErrors: newFaramErrors,
    });
  }

  render () {
    const {
      countries,
      districts,
      eventList,
      projectForm,
    } = this.props;

    const {
      nationalSocietyOptions,
      countryOptions,
    } = this.getCountryAndNationalSocietyOptions(countries);

    const {
      faramValues,
      faramErrors,
    } = this.state;

    const districtOptions = this.getDistrictOptions(districts, faramValues.project_country);
    const {
      currentOperationOptions,
      currentEmergencyOperationOptions,
    } = this.getCurrentOperationOptions(eventList);

    const fetchingCountries = countries && countries.fetching;
    const shouldDisableCountryInput = fetchingCountries;

    const fetchingDistricts = districts && districts[faramValues.project_country] && districts[faramValues.project_country].fetching;
    const shouldDisableDistrictInput = fetchingCountries || fetchingDistricts;
    const fetchingEvents = eventList && eventList.fetching;
    const shouldDisableCurrentOperation = fetchingEvents;
    const fetchingNationalSocieties = fetchingCountries;
    const shouldDisableNationalSocietyInput = fetchingNationalSocieties;

    const projectFormPending = projectForm.fetching;
    const shouldDisableSubmitButton = projectFormPending || fetchingCountries || fetchingDistricts;

    const shouldShowCurrentEmergencyOperation = String(faramValues.operation_type) === '1' &&
      String(faramValues.programme_type) === '2';
    const shouldShowCurrentOperation = String(faramValues.operation_type) === '1' &&
      String(faramValues.programme_type) === '1';

    const isBudgetAndTotalNotRequired = this.getBudgetAndTotalNotRequired(faramValues.reporting_ns, nationalSocietyOptions);

    const shouldShowDisasterType = String(faramValues.operation_type) === '0' ||
      shouldShowCurrentOperation ||
      shouldShowCurrentEmergencyOperation;
    const shouldDisableDisasterType = String(faramValues.operation_type) === '1';

    const shouldShowMunicipalityWard = faramValues.where_district >= 0;

    const schema = this.getSchema(
      faramValues.operation_type,
      faramValues.programme_type,
      faramValues.status,
      isBudgetAndTotalNotRequired,
    );

    const shouldDisableTotalTarget = !isFalsy(faramValues.target_male) || !isFalsy(faramValues.target_female) || !isFalsy(faramValues.target_other);
    // const shouldDisableTotalReached = !isFalsy(faramValues.reached_male) || !isFalsy(faramValues.reached_female) || !isFalsy(faramValues.reached_other);
    const filteredSecondarySectorOptions = this.getFilteredSecondarySectorOptions(faramValues.sector);
    const filteredSubactivityOptions = this.getFilteredSubactivityOptions(faramValues.activity);

    const filteredDistrictOptions = this.getFilteredDistrictOptions(faramValues.where_province);
    const filteredMunicipalityOptions = this.getFilteredMunicipalityOptions(faramValues.where_province, faramValues.where_district);

    const hasNonFieldErrors = projectForm.error;
    const { strings } = this.context;

    return (
      <React.Fragment>
        { projectForm.fetching && <BlockLoading /> }
        <Faram
          className='project-form'
          schema={schema}
          value={faramValues}
          error={faramErrors}
          onChange={this.handleFaramChange}
          onValidationSuccess={this.handleFaramValidationSuccess}
          onValidationFailure={this.handleFaramValidationFailure}
          disabled={projectForm.fetching}
        >
          <InputSection
            title={strings.projectFormReportingNational}
            helpText={strings.projectFormReportingHelpText}
            tooltip={strings.projectFormReportingTooltip}
          >
            <SelectInput
              faramElementName='reporting_ns'
              className='project-form-select'
              options={nationalSocietyOptions}
              placeholder={fetchingNationalSocieties ? strings.projectFormFetching : undefined}
              disabled={shouldDisableNationalSocietyInput}
            />
          </InputSection>

          <InputSection
            title={strings.projectFormOrganizationalUnit}
            helpText={strings.projectFormOrganizationalUnitHelpText}
            tooltip={strings.projectFormOrganizationalUnitTooltip}
          >
            <SelectInput
              faramElementName='organizational_unit'
              className='project-form-select'
              options={organizationalUnitOptions}
            />
          </InputSection>

          <InputSection
            title={strings.projectFormPartner}
            helpText={strings.projectFormPartnerHelpText}
            tooltip={strings.projectFormPartnerTooltip}
          >
            <SelectInput
              faramElementName='partner'
              className='project-form-select'
              options={partnerOptions}
            />
          </InputSection>

          <InputSection
            className='multi-input-section hidden'
            title={strings.projectFormCountryTitle}
            helpText={strings.projectFormCountryHelpText}
            tooltip={strings.projectFormCountryTooltip}
          >
            <SelectInput
              faramElementName='project_country'
              label={strings.projectFormCountryLabel}
              className='project-form-select'
              options={countryOptions}
              clearable={false}
              disabled={true || shouldDisableCountryInput}
              placeholder={fetchingCountries ? strings.projectFormCountryPlaceholder : undefined}
            />
            <div className="district-select-container">
              <SelectInput
                faramElementName='project_districts'
                label={strings.projectFormDistrictLabel}
                className='project-form-select'
                options={districtOptions}
                disabled={shouldDisableDistrictInput}
                placeholder={fetchingDistricts ? strings.projectFormDistrictFetching : strings.projectFormDistrictSelect }
                multi
              />
              <button
                type="button"
                className={_cs('button button--secondary-bounded', shouldDisableDistrictInput && 'disabled')}
                disabled={shouldDisableDistrictInput}
                onClick={this.handleSelectAllDistrictButtonClick}
              >
                <Translate stringId='projectFormAll'/>
              </button>
            </div>
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormProgrammeType}
            tooltip={strings.projectFormTypeOfOperationTooltip}
            helpText={
              <React.Fragment>
                <b>{strings.projectFormProgrammeType}</b>
                {strings.projectFormProgrammeTooltip}
              </React.Fragment>
            }
          >
            <SelectInput
              faramElementName='operation_type'
              label={strings.projectFormOperationType}
              className='project-form-select'
              options={operationTypeOptions}
            />
            <SelectInput
              faramElementName='programme_type'
              label={strings.projectFormProgrammeTypeLabel}
              className='project-form-select'
              options={programmeTypeOptions}
            />
          </InputSection>

          { shouldShowCurrentOperation && (
            <InputSection
              title={strings.projectFormCurrentOperation}
            >
              <SelectInput
                faramElementName='event'
                className='project-form-select'
                options={currentOperationOptions}
                disabled={shouldDisableCurrentOperation}
                placeholder={fetchingEvents ? 'Fetching events...' : undefined}
              />
            </InputSection>
          )}

          { shouldShowCurrentEmergencyOperation && (
            <InputSection
              title={strings.projectFormCurrentEmergency}
              helpText={strings.projectFormCurrentEmergencyHelpText}
            >
              <SelectInput
                faramElementName='event'
                className='project-form-select'
                options={currentEmergencyOperationOptions}
                disabled={shouldDisableCurrentOperation}
                placeholder={fetchingEvents ? strings.projectFormFetchingEvents : undefined}
              />
            </InputSection>
          )}

          { shouldShowDisasterType && (
            <InputSection
              title={strings.projectFormDisasterType}
            >
              <SelectInput
                faramElementName='dtype'
                className='project-form-select'
                options={disasterTypeOptions}
                disabled={shouldDisableDisasterType}
                placeholder={shouldDisableDisasterType ? strings.projectFormDisasterTypePlaceholder : undefined}
              />
            </InputSection>
          )}

          <InputSection
            title={strings.projectFormProjectName}
            helpText={strings.projectFormHelpText}
            tooltip={strings.projectFormTooltip}
          >
            <TextInput
              faramElementName='name'
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormSectorTitle}
            helpText={
              <React.Fragment>
                <div>
                  <b>
                    {strings.projectFormPrimarySector}
                  </b>
                  {strings.projectFormPrimarySectorText}
                </div>
                <div>
                  <b>
                    {strings.projectFormTagging}
                  </b>
                  {strings.projectFormTaggingText}
                </div>
              </React.Fragment>
            }
            tooltip={strings.projectFormTaggingTooltip}
          >
            <SelectInput
              faramElementName='primary_sector'
              className='project-form-select'
              label={strings.projectFormPrimarySectorSelect}
              options={sectorOptions}
            />
            <SelectInput
              faramElementName='secondary_sectors'
              className='project-form-select'
              label={strings.projectFormSecondarySectorLabel}
              options={filteredSecondarySectorOptions}
              multi
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormActvityTitle}
            helpText={
                <React.Fragment>
                <div>
                    <b>
                    {strings.projectFormActivity}
                    </b>
                    {strings.projectFormFormActivityText}
                </div>
                <div>
                    <b>
                    {strings.projectFormSubactivity}
                    </b>
                    {strings.projectFormSubactivityText}
                </div>
                </React.Fragment>
            }
            tooltip={strings.projectFormActivityTooltip}
            >
            <SelectInput
                faramElementName='activity'
                className='project-form-select'
                label={strings.projectFormActivityLabel}
                options={activityOptions}
            />
            <SelectInput
                faramElementName='subactivity'
                className='project-form-select'
                label={strings.projectFormSubactivityLabel}
                options={filteredSubactivityOptions}
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormUnitsTitle}
            helpText={
                <React.Fragment>
                <div>
                    <b>
                    {strings.projectFormUnitsMeasurementMetric}
                    </b>
                    {strings.projectFormUnitsMeasurementMetricText}
                </div>
                <div>
                    <b>
                    {strings.projectFormUnitsQuantity}
                    </b>
                    {strings.projectFormUnitsQuantityTest}
                </div>
                </React.Fragment>
            }
            tooltip={strings.projectFormUnitsTooltip}
            >
            <SelectInput
                faramElementName='units_measurement_metric'
                className='project-form-select'
                label={strings.projectFormUnitsMeasurementMetricLabel}
                options={unitsOfMeasurementOptions}
            />
            <NumberInput
                label={strings.projectFormUnitsQuantityLabel}
                faramElementName='units_quantity'
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormProvinceDistrict}
            helpText={
                <React.Fragment>
                <div>
                    {strings.projectFormProvinceDistrictText}
                </div>
                </React.Fragment>
            }
            >
            <SelectInput
                faramElementName='where_province'
                className='project-form-select'
                label={strings.projectFormWhereProvinceLabel}
                options={provinceOptions}
            />
            <SelectInput
                faramElementName='where_district'
                className='project-form-select'
                label={strings.projectFormWhereDistrictTitle}
                options={filteredDistrictOptions}
            />
          </InputSection>

          { shouldShowMunicipalityWard && (
          <InputSection
            className='multi-input-section'
            title={strings.projectFormMunicipalityWardTitle}
            helpText={
                <React.Fragment>
                <div>
                    {strings.projectFormMunicipalityWardText}
                </div>
                </React.Fragment>
            }
            >
            <SelectInput
                faramElementName='where_municipality'
                className='project-form-select'
                label={strings.projectFormWhereMunicipalityLabel}
                options={filteredMunicipalityOptions}
            />
            <NumberInput
                label={strings.projectFormWhereWardLabel}
                faramElementName='where_ward'
            />
          </InputSection>
          )}

          <InputSection
            className='multi-input-section'
            title={strings.projectFormDeliveryPointTitle}
            helpText={strings.projectFormDeliveryPointText}
            tooltip={strings.projectFormDeliveryPointTooltip}
          >
            <SelectInput
                faramElementName='where_delivery_service_place'
                className='project-form-select'
                label={strings.projectFormWhereDeliveryPointLabel}
                options={deliveryPointOptions}
            />
            <TextInput
              faramElementName='where_delivery_service_name'
              label={strings.projectFormWhereDeliveryServiceNameLabel}
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormMultiLabel}
            helpText={strings.projectFormMultiLabelHelpText}
            tooltip={strings.projectFormMultiLabelTooltip}
          >
            <DateInput
              faramElementName='start_date'
              label={strings.projectFormStartDate}
            />
            <DateInput
              faramElementName='end_date'
              label={strings.projectFormEndDate}
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            // TODO: use translations
            title={`Budget and Status${isBudgetAndTotalNotRequired ? '' : '*'}`}
            helpText={
              <React.Fragment>
                <div>
                  <b>
                    {strings.projectFormBudget}
                  </b>
                  {strings.projectFormBudgetText}
                </div>
                <div>
                  <b>
                    {strings.projectFormProjectStatus}
                  </b>
                  {strings.projectFormProjectStatusText}
                </div>
              </React.Fragment>
            }
            tooltip={strings.projectFormProjectTooltip}
          >
            {/* TODO: use translations */}
            { faramValues.is_project_completed ? (
              <NumberInput
                label='Actual Expenditure (CHF)'
                faramElementName='actual_expenditure'
              />
            ) : (
              <NumberInput
                label='Project Budget (CHF)'
                faramElementName='budget_amount'
              />
            )}
            <div>
              <Checkbox
                label={strings.projectFormProjectCompleted}
                faramElementName="is_project_completed"
              />
              <TextOutput
                label={strings.projectFormProjectStatusTitle}
                value={statuses[faramValues.status]}
              />
            </div>
          </InputSection>

          <InputSection
            title={strings.projectFormBeneficiaryTypeTitle}
          >
            <SelectInput
                faramElementName='beneficiary_type'
                className='project-form-select'
                options={beneficiaryTypeOptions}
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormTargetedTotalPeople}
            helpText={strings.projectFormTargetedTotalPeopleText}
            tooltip={strings.projectFormTargetedTotalPeopleTooltip}
          >
            <NumberInput
              disabled={true}
              faramElementName='target_male'
              label={strings.projectFormTargetedMalePeopleLabel}
            />
            <NumberInput
              disabled={true}
              faramElementName='target_female'
              label={strings.projectFormTargetedFemalePeopleLabel}
            />
            <NumberInput
              disabled={true}
              faramElementName='target_lgbtiq'
              label={strings.projectFormTargetedLGBTIQPeopleLabel}
            />
            <NumberInput
              disabled={true}
              faramElementName='target_other'
              label={strings.projectFormTargetedOtherPeopleLabel}
            />
            <NumberInput
              disabled={true || shouldDisableTotalTarget}
              faramElementName='target_total'
              label={strings.projectFormTargetedTotalPeopleLabel}
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormTargetedMalePeople}
            helpText={strings.projectFormTargetedMalePeopleText}
            tooltip={strings.projectFormTargetedMalePeopleTooltip}
          >
            <NumberInput
              faramElementName='target_male_00_05'
              label={strings.projectFormAge0005}
            />
            <NumberInput
              faramElementName='target_male_06_12'
              label={strings.projectFormAge0612}
            />
            <NumberInput
              faramElementName='target_male_13_17'
              label={strings.projectFormAge1317}
            />
            <NumberInput
              faramElementName='target_male_18_29'
              label={strings.projectFormAge1829}
            />
            <NumberInput
              faramElementName='target_male_30_39'
              label={strings.projectFormAge3039}
            />
            <NumberInput
              faramElementName='target_male_40_49'
              label={strings.projectFormAge4049}
            />
            <NumberInput
              faramElementName='target_male_50_59'
              label={strings.projectFormAge5059}
            />
            <NumberInput
              faramElementName='target_male_60_69'
              label={strings.projectFormAge6069}
            />
            <NumberInput
              faramElementName='target_male_70_79'
              label={strings.projectFormAge7079}
            />
            <NumberInput
              faramElementName='target_male_80_plus'
              label={strings.projectFormAge80Plus}
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormTargetedFemalePeople}
            helpText={strings.projectFormTargetedFemalePeopleText}
            tooltip={strings.projectFormTargetedFemalePeopleTooltip}
          >
            <NumberInput
              faramElementName='target_female_00_05'
              label={strings.projectFormAge0005}
            />
            <NumberInput
              faramElementName='target_female_06_12'
              label={strings.projectFormAge0612}
            />
            <NumberInput
              faramElementName='target_female_13_17'
              label={strings.projectFormAge1317}
            />
            <NumberInput
              faramElementName='target_female_18_29'
              label={strings.projectFormAge1829}
            />
            <NumberInput
              faramElementName='target_female_30_39'
              label={strings.projectFormAge3039}
            />
            <NumberInput
              faramElementName='target_female_40_49'
              label={strings.projectFormAge4049}
            />
            <NumberInput
              faramElementName='target_female_50_59'
              label={strings.projectFormAge5059}
            />
            <NumberInput
              faramElementName='target_female_60_69'
              label={strings.projectFormAge6069}
            />
            <NumberInput
              faramElementName='target_female_70_79'
              label={strings.projectFormAge7079}
            />
            <NumberInput
              faramElementName='target_female_80_plus'
              label={strings.projectFormAge80Plus}
            />
          </InputSection>

          <InputSection
            title={strings.projectFormTargetedLGBTIQPeople}
            helpText={strings.projectFormTargetedLGBTIQPeopleText}
            tooltip={strings.projectFormTargetedLGBTIQPeopleTooltip}
          >
            <NumberInput
                faramElementName='target_lgbtiq'
            />
          </InputSection>

          <InputSection
            title={strings.projectFormTargetedOtherPeople}
            helpText={strings.projectFormTargetedOtherPeopleText}
            tooltip={strings.projectFormTargetedOtherPeopleTooltip}
          >
            <NumberInput
                faramElementName='target_other'
            />
          </InputSection>

          <InputSection
            className='multi-input-section'
            title={strings.projectFormTargetedVulnerable}
            helpText={strings.projectFormTargetedVulnerableText}
            tooltip={strings.projectFormTargetedVulnerableTooltip}
          >
            <NumberInput
                faramElementName='target_pregnant_women'
                label={strings.projectFormTargetedPregnantWomenLabel}
            />
            <NumberInput
                faramElementName='target_people_with_disability'
                label={strings.projectFormTargetedPeopleWithDisabilityLabel}
            />
          </InputSection>

          <InputSection
            title={strings.projectFormProjectVisibility}
          >
            <SelectInput
              faramElementName='visibility'
              className='project-form-select'
              options={projectVisibilityOptions}
              helpText={strings.projectFormProjectVisibilityHelpText}
              tooltip={strings.projectFormProjectVisibilityTooltip}
              clearable={false}
            />
          </InputSection>
          { hasNonFieldErrors && (
            <div className='tc-non-field-errors'>
              <Translate stringId='projectFormError'/>
            </div>
          )}

          <footer className='tc-footer'>
            {/*
              The first hidden and disabled submit button is to disable form submission on enter
              more details on: https://www.w3.org/TR/2018/SPSD-html5-20180327/forms.html#implicit-submission
            */}
            <button
              className='three-w-hidden-submit-button'
              type="submit"
              disabled
            />
            <button
              className={_cs('button button--primary-bounded', shouldDisableSubmitButton && 'disabled')}
              type="submit"
              disabled={shouldDisableSubmitButton}
            >
              { projectFormPending ? strings.projectFormSubmitting : strings.projectFormSubmit }
            </button>
          </footer>
        </Faram>
      </React.Fragment>
    );
  }
}

ProjectForm.contextType = LanguageContext;

const selector = (state, ownProps) => ({
  countries: state.countries,
  districts: state.districts,
  eventList: state.event ? state.event.eventList : undefined,
  projectForm: state.projectForm,
});

const dispatcher = dispatch => ({
  _getCountries: (...args) => dispatch(getCountries(...args)),
  _getDistricts: (...args) => dispatch(getDistrictsForCountryPF(...args)),
  _getEventList: (...args) => dispatch(getEventList(...args)),
  _postProject: (...args) => dispatch(postProject(...args)),
});

export default connect(
  selector,
  dispatcher
)(ProjectForm);
