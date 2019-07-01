import React from 'react';

import { 
    FIELD_TYPES,
    NO_SELECTION
} from './ConfigurableFormConstants'

const buildFieldComponents = (fields, onChangeCallback) => {
    let fieldComponents = fields.map( field => {
        if (field.type === FIELD_TYPES.TEXT) {
            return (
                <div key={`${field.id}_div`}>
                    <label>{field.label}</label> <input 
                        key={field.id}
                        id={field.id} 
                        type={FIELD_TYPES.TEXT} 
                        name={field.id} 
                        onChange={onChangeCallback} />
                </div>
            );
        } else if (field.type === FIELD_TYPES.ENUM) {
            let options = [];
            if (field.values) {
                options = field.values.map( value => {
                    return (<option key={value} value={value}>{value}</option>);
                })
            }
            options.unshift(
                <option key={`${field.id}_${NO_SELECTION}`} value=''> </option>
            );

            return (
                <div key={`${field.id}_div`}>
                    <label>{field.label}</label>  <select 
                        defaultValue={NO_SELECTION}
                         key={field.id}
                         id={field.id}
                         onChange={onChangeCallback}>
                        {options}
                    </select>
                </div>
            );
        }
    });
    return fieldComponents;
};
export default buildFieldComponents;