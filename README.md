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

### CSS properties
- `--dw-accordion-border-color`: Border color of whole accordion. Default is `rgba(0, 0, 0, 0.10)`.
- `--dw-accordion-item-divider-color`: Divider color of each item. Default is `rgba(0, 0, 0, 0.10)`.
- `--dw-accordion-header-padding`: Padding of header of each item. Default is `8px 16px`.
- `--dw-accordion-content-padding`: Padding of content of each item. Default is `8px 16px`.