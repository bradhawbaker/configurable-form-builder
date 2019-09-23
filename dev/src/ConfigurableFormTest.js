import React, { Component } from "react";

import ConfigurableForm from "../../src/ConfigurableForm";
import FORM_CONFIG from "./form-config";
import theme from "./themeConfigurableForm.scss";

class ConfigurableFormTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedValues: {},
      themed: false
    };
  }

  submitCallback = newFormValueMap => {
    this.setState({
      submittedValues: newFormValueMap
    });
  };

  toggleTheme = () => {
    const { themed } = this.state;
    this.setState({
      themed: !themed
    });
  };

  render() {
    let { submittedValues, themed } = this.state;
    const themeText = themed ? "Disable Theming" : "Enable Theming";
    let themeProps = {};

    if (themed) {
      themeProps = {
        theme: theme,
        themeCompose: "merge",
        themePrefix: "configForm-"
      };
    }

    return (
      <div>
        <button onClick={this.toggleTheme}>{themeText}</button>
        <ConfigurableForm
          {...FORM_CONFIG}
          {...themeProps}
          primaryButtonCallback={this.submitCallback}
        />
        <hr />
        <h2>Submitted Form Data</h2>
        {JSON.stringify(submittedValues)}
      </div>
    );
  }
}
export default ConfigurableFormTest;
