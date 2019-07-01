import React, { Component } from "react";
import PropTypes from "prop-types";

import getFieldComponents from './util';
import { PRIMARY_BUTTON_DEFAULT_TEXT } from './ConfigurableFormConstants'

class ConfigurableForm extends Component {
  
render() {
    let { title, fields, primaryButtonText, primaryButtonCallback } = this.props;
    let fieldComponents = getFieldComponents(fields);

    return (
        <div>
            <h1>{title}</h1>
            <form>
                {fieldComponents}
                <button onClick={primaryButtonCallback}>{ primaryButtonText ? primaryButtonText : PRIMARY_BUTTON_DEFAULT_TEXT }</button>
            </form>
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
  primaryButtonText: PropTypes.string,
  primaryButtonCallback: PropTypes.func.isRequired
};
