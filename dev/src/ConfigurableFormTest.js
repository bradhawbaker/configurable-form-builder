import React, { Component } from "react";

import ConfigurableForm from "../../src/ConfigurableForm";
import FORM_CONFIG from "./form-config";

class ConfigurableFormTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedValues: {}
        };
    }

    submitCallback = (newFormValueMap) => {
        this.setState({
            submittedValues: newFormValueMap
        });
    };
    
    render() {
        let { submittedValues } = this.state;

        return (
            <div>
                <ConfigurableForm 
                    {...FORM_CONFIG}
                    primaryButtonCallback={this.submitCallback} 
                />
                <hr />
                <h2>Submitted Form Data</h2>
                {JSON.stringify(submittedValues)}
            </div>
        );
    }
} export default ConfigurableFormTest;