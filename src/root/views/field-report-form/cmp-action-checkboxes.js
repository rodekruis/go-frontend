import React from 'react';
import { PropTypes as T } from 'prop-types';

import { environment } from '#config';

import {
  FormTextarea
} from '#components/form-elements/';
import FormCheckboxGroupActions from '#components/form-elements/checkbox-group-actions';
import LanguageContext from '#root/languageContext';

export default class ActionsCheckboxes extends React.Component {
  constructor (props) {
    super(props);
    this.onChecksChange = this.onChecksChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onChecksChange (checkValues) {
    const { values, onChange } = this.props;
    onChange(Object.assign({}, values, {options: checkValues}));
  }

  onDescriptionChange (e) {
    const { values, onChange } = this.props;
    const newVals = Object.assign({}, values, {description: e.target.value});
    onChange(newVals);
  }

  render () {
    const {
      label,
      name,
      description,
      placeholder,
      options,
      values,
      classInput
    } = this.props;

    // Split actions by category
    const groupedOptions = options
      .reduce(
        (prev, {category}) =>
          prev.includes(category) ? prev : prev.concat(category)
        , [])
      .map(category => ({
        label: category,
        options: options.filter(filteredOption => filteredOption.category === category)
      }));

    const { strings } = this.context;
    return (
      <FormCheckboxGroupActions
        label={label}
        key={label}
        description={description}
        name={`${name}[options]`}
        classWrapper='action-checkboxes action-checkboxes--textarea'
        options={groupedOptions}
        values={values.options}
        onChange={this.onChecksChange} >
        <FormTextarea
          label={strings.cmpActionDescriptionLabel}
          classInput={classInput}
          placeholder={placeholder}
          name={`${name}[description]`}
          id={`${name}-description`}
          classLabel='label-secondary'
          value={values.description}
          onChange={this.onDescriptionChange} />
      </FormCheckboxGroupActions>
    );
  }
}

ActionsCheckboxes.contextType = LanguageContext;
if (environment !== 'production') {
  ActionsCheckboxes.propTypes = {
    label: T.string,
    name: T.string,
    description: T.string,
    placeholder: T.string,
    options: T.array,
    values: T.shape({
      options: T.array,
      description: T.string
    }),
    classInput: T.string,
    onChange: T.func
  };
}
