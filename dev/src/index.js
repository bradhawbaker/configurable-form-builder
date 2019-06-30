import React from "react";
import ReactDOM from "react-dom";

import ConfigurableForm from "../../src/ConfigurableForm";
import FORM_CONFIG from "./form-config";

const submitCallback = () => {
  // TODO
};

ReactDOM.render(
  <ConfigurableForm {...FORM_CONFIG} primaryButtonCallback={submitCallback} />,
  document.getElementById("app")
);
