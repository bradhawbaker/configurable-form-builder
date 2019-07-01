import React from 'react';

import { FIELD_TYPES } from './ConfigurableFormConstants'

const getFieldComponents = (fields) => {
    let fieldComponents = fields.map( field => {
        if (field.type === FIELD_TYPES.TEXT) {
            return (
                <div>
                    <label>{field.label}</label> <input type={FIELD_TYPES.TEXT} name={field.id} />
                </div>
            );
        } else if (field.type === FIELD_TYPES.ENUM) {
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
};
export default getFieldComponents;