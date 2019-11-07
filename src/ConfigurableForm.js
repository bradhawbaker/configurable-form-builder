import React, { Component } from "react";
import PropTypes from "prop-types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { composeThemeFromProps } from "@css-modules-theme/react";

import buildFieldComponents from "./util";
import {
  PRIMARY_BUTTON_DEFAULT_TEXT,
  NO_FORM_ATTRIBUTES
} from "./ConfigurableFormConstants";

import styles from "../resources/styles/configurableForm.scss";

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
    let {
      title,
      primaryButtonText,
      fields,
      noAttrText,
      breakpoints
    } = this.props;
    let { formValueMap } = this.state;
    let fieldComponents = buildFieldComponents(
      fields,
      formValueMap,
      this.onFieldChange
    );
    const theme = composeThemeFromProps(styles, this.props, {
      compose: "Replace"
    });

    return (
      <div className={theme.configurableFormBuilder}>
        {title && <h1>{title}</h1>}
        {fields.length > 0 && (
          <form>
            <ResponsiveMasonry columnsCountBreakPoints={breakpoints}>
              <Masonry>{fieldComponents}</Masonry>
            </ResponsiveMasonry>
            <button className={theme.primary} onClick={this.handleSubmit}>
              {primaryButtonText}
            </button>
          </form>
        )}
        {fields.length === 0 && <p>{noAttrText}</p>}
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
  ),
  values: PropTypes.object,
  primaryButtonText: PropTypes.string,
  primaryButtonCallback: PropTypes.func.isRequired,
  noAttrText: PropTypes.string,
  breakpoints: PropTypes.object
};
ConfigurableForm.defaultProps = {
  fields: [],
  primaryButtonText: PRIMARY_BUTTON_DEFAULT_TEXT,
  noAttrText: NO_FORM_ATTRIBUTES,
  breakpoints: {}
};
