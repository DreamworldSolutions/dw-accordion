# dw-accordion
## Introduction
- It's accordion web component.

## Installation Steps
1. `yarn add @dreamworld/dw-accordion`

## Usage
- This can be used by extention only.
### Import
- `import '@dreamworld/dw-accordion'`

### Use
- ```
  <dw-accordion 
    items=${[{}, {}]}>
  </dw-accordion>
  ```

### Properties
- `items`: List of items to be shown.
### Templates (These both are mandatory templates)
- `headerTemplate(item)`
- `contentTemplate(item)`