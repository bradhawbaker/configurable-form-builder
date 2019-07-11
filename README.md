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
  primaryButtonText: "Search",
  noAttrText: "No searchable attributes for selected entity types",
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
  values: PropTypes.object,
  primaryButtonText: PropTypes.string,
  primaryButtonCallback: PropTypes.func.isRequired,
  noAttrText: PropTypes.string
};
```

Form properties:

Property Name | Type | Required | Description | Default
------------- | ---- | -------- | ----------- | -------
title | String | No | Optional title to display above the form | < just hides title >
fields | Array | Yes | a list of form fields to be rendered | N/A
values | Object | No | an object mapping the value set for each attribute | N/A
primaryButtonText | String | No | Optional text to display in the primary form button | "Submit"
primaryButtonCallback | Function | Yes | The callback method when the form is submitted | N/A
noAttrText | String | No | Text to display when there are no attribute fileds for the form to render | "No available attributes"

Field Properties:

Property Name | Type | Required | Description
------------- | ---- | -------- | -----------
id | String | Yes | the unique identifier of the form field
type | String | Yes | the type of the form field
label | String | No | Optional text to display as the form field label
values | Array | No | optional list of values for ENUM type fields

Valid Field Property Types:

Type | Rendered Component
---- | ------------------
ENUM | Dropdown 
Anything Else | Textfield
