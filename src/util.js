import React from "react";

import { FIELD_TYPES, NO_SELECTION } from "./ConfigurableFormConstants";

const buildFieldComponents = (fields, values, onChangeCallback) => {
  let fieldComponents = fields.map(field => {
    if (field.type === FIELD_TYPES.ENUM) {
      let options = [];
      if (field.values) {
        options = field.values.map(value => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        });
      }
      options.unshift(
        <option key={`${field.id}_${NO_SELECTION}`} value="">
          {" "}
        </option>
      );

      return (
        <div key={`${field.id}_div`}>
          <label>{field.label}</label>
          <select
            defaultValue={NO_SELECTION}
            key={field.id}
            id={field.id}
            onChange={onChangeCallback}
          >
            {options}
          </select>
        </div>
      );
    } else {
      return (
        <div key={`${field.id}_div`}>
          <label>{field.label}</label>
          <input
            key={field.id}
            id={field.id}
            type={FIELD_TYPES.TEXT}
            name={field.id}
            value={values.hasOwnProperty(field.id) ? values[field.id] : ""}
            onChange={onChangeCallback}
          />
        </div>
      );
    }
  });
  return fieldComponents;
};
export default buildFieldComponents;
