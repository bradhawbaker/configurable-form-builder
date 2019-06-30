import React, { Component } from "react";
import PropTypes from "prop-types";

class ConfigurableForm extends Component {
  render() {
    let { title } = this.props;

    return <h1>{title}</h1>;
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
  primaryButtonText: PropTypes.string,
  primaryButtonCallback: PropTypes.func.isRequired
};
