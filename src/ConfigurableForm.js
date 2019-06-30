import React, { Component } from "react";
import PropTypes from "prop-types";

class ConfigurableForm extends Component {
  
constructor(props) {
    super(props);
}

getFieldComponents = (fields) => {
    let fieldComponents = fields.map( field => {
        if (field.type === 'text') {
            return (
                <div>
                    <label>{field.label}</label> <input type='text' name={field.id} />
                </div>
            );
        } else if (field.type === 'enum') {
            let options = [];
            if (field.values) {
                options = field.values.map( value => {
                    return (<option key={value} value={value}>{value}</option>);
                })
            }
            return (
                <div>
                    <label>{field.label}</label>  <select>
                        {options}
                    </select>
                </div>
            );
        }
    });
    return fieldComponents;
}
  
render() {
    let { title, fields, primaryButtonText, primaryButtonCallback } = this.props;
    let fieldComponents = this.getFieldComponents(fields);

    return (
        <div>
            <h1>{title}</h1>
            <form>
                {fieldComponents}
                <button onClick={primaryButtonCallback}>{ primaryButtonText ? primaryButtonText : 'Submit' }</button>
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
