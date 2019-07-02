# Configurable Form Builder

## Overview
The Configurable Form Builder allows the creation of a React based forms via a JSON configuration file.

## Installation
Run the following NPM command to install:

```
> npm install --save configurable-form-builder
````

Run the following NPM command to launch a sample demo:

```
> npm start
```

## Usage
The Configurable Form Builder can be used as follows:

```
import ConfigurableForm from 'configurable-form-builder';

...

primaryCallback = (submittedFormValueMap) => {
    [do some logic with submitted form attribute value pairs]
}

...

<ConfigurableForm 
    title="Sample Config Form Title",
    fields=[
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
    primaryButtonCallback={this.primaryCallback} />
```
in order to generate the following:

![Sample Form Screenshot](/screenshot.png)

### Configuration Properties

```
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
```

Form properties:

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
title | String | No | Optional title to display above the form
fields | Array | Yes | a list of form fields to be rendered
primaryButtonText | String | No | Optional text to display in the primary form button (default value is 'Submit')
primaryButtonCallback | Function | Yes | The callback method when the form is submitted

Form Field Properties:

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
id | String | Yes | the unique identifier of the form field
type | String | Yes | the type of the form field (valid values: TEXT, ENUM)
label | String | No | Optional text to display as the form field label
values | Array | No | optional list of values for ENUM type fields
