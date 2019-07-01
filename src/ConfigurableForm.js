import React, { Component } from "react";
import PropTypes from "prop-types";

import buildFieldComponents from './util';
import { PRIMARY_BUTTON_DEFAULT_TEXT } from './ConfigurableFormConstants'

class ConfigurableForm extends Component {

constructor(props) {
    super(props);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.state = {
        formValueMap: {},
        components: []
    };
}

onFieldChange(event) {
    let { formValueMap } = this.state;
    let updatedFormValaueMap = JSON.parse(JSON.stringify(formValueMap));
    if (event.target.value && event.target.value !== '') {
        updatedFormValaueMap[event.target.id] = event.target.value;
    } else if (updatedFormValaueMap.hasOwnProperty(event.target.id)) {
        delete updatedFormValaueMap[event.target.id]
    }

    this.setState({
        formValueMap: updatedFormValaueMap
    });
}

componentDidMount() {
    let { fields } = this.props;
    let fieldComponents = buildFieldComponents(fields, this.onFieldChange);
    this.setState({
        components: fieldComponents
    });
}

render() {
    let { title, primaryButtonText, primaryButtonCallback } = this.props;
    let { formValueMap, components } = this.state;
    
    return (
        <div>
            <h1>{title}</h1>
            <form>
                {components}
                <button onClick={() => primaryButtonCallback(formValueMap)}>
                    { primaryButtonText ? primaryButtonText : PRIMARY_BUTTON_DEFAULT_TEXT }
                </button>
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
  primaryButtonCallback: PropTypes.func.isRequired,
  secondaryButtonText: PropTypes.string,
  secondaryButtonCallback: PropTypes.func
};
