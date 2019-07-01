import React, { Component } from "react";

import ConfigurableForm from "../../src/ConfigurableForm";
import FORM_CONFIG from "./form-config";

class ConfigurableFormTest extends Component {
    submitCallback = (newFormValueMap) => {
        // eslint-disable-next-line
        console.log(newFormValueMap);
    };
    
    render() {
        return (
            <ConfigurableForm {...FORM_CONFIG} primaryButtonCallback={this.submitCallback} />
        );
    }
} export default ConfigurableFormTest;