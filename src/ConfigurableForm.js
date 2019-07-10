import React, { Component } from "react";
import PropTypes from "prop-types";

import buildFieldComponents from "./util";
import {
  PRIMARY_BUTTON_DEFAULT_TEXT,
  NO_FORM_ATTRIBUTES
} from "./ConfigurableFormConstants";

import "../resources/styles/configurableForm.scss";

class ConfigurableForm extends Component {
  constructor(props) {
    super(props);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    let initialValues = props.hasOwnProperty("values") ? props.values : {};
    this.state = {
      formValueMap: initialValues,
      components: []
    };
  }

  onFieldChange(event) {
    let { formValueMap } = this.state;
    let updatedFormValaueMap = JSON.parse(JSON.stringify(formValueMap));
    if (event.target.value && event.target.value !== "") {
      updatedFormValaueMap[event.target.id] = event.target.value;
    } else if (updatedFormValaueMap.hasOwnProperty(event.target.id)) {
      delete updatedFormValaueMap[event.target.id];
    }

    this.setState({
      formValueMap: updatedFormValaueMap
    });
  }

  handleSubmit(event) {
    let { primaryButtonCallback } = this.props;
    let { formValueMap } = this.state;
    event.preventDefault();
    primaryButtonCallback(formValueMap);
  }

  render() {
    let { title, primaryButtonText, fields, noAttrText } = this.props;
    let { formValueMap } = this.state;
    let fieldComponents = buildFieldComponents(
      fields,
      formValueMap,
      this.onFieldChange
    );

    return (
      <div className="configurable-form-builder">
        {title && <h1>{title}</h1>}
        {fields.length > 0 && (
          <form>
            {fieldComponents}
            <button className="primary" onClick={this.handleSubmit}>
              {primaryButtonText
                ? primaryButtonText
                : PRIMARY_BUTTON_DEFAULT_TEXT}
            </button>
          </form>
        )}
        {fields.length === 0 && (
          <p>{noAttrText ? noAttrText : NO_FORM_ATTRIBUTES}</p>
        )}
      </div>
    );
  }
}
export default ConfigurableForm;

ConfigurableForm.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  values: PropTypes.object,
  primaryButtonText: PropTypes.string,
  primaryButtonCallback: PropTypes.func.isRequired,
  noAttrText: PropTypes.string
};
