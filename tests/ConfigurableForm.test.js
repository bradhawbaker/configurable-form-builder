import React from 'react';
import renderer from 'react-test-renderer';

import ConfiguraleForm from '../src/ConfigurableForm';

const SINGLE_TEXTFIELD_FORM_CONFIG = {
    title: "Sample Config Form Title",
    fields: [
      {
        id: "id",
        type: "text",
        label: "Name"
      },
      {
        id: "status",
        type: "enum",
        label: "Status",
        values: ["active", "error", "pending"]
      }
    ],
    primaryButtonText: "Search"
  };

test('Basic snapshot', () => {
    const component = renderer.create(
        <ConfiguraleForm 
            {...SINGLE_TEXTFIELD_FORM_CONFIG} 
            primaryButtonCallback={ () => {
                console.log('simple callback');
            }} 
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});