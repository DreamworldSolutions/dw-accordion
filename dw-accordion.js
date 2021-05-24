import { html, css } from 'lit-element';
import { LitElement } from '@dreamworld/pwa-helpers/lit-element.js';
import { repeat } from 'lit-html/directives/repeat.js';
import '@dreamworld/dw-icon/dw-icon';
class DwAccordion extends LitElement {
  static get properties() {
    return {
      /**
       * Input property. 
       * List of items.
       */
      items: { type: Array },

      /**
       * List of index number of selected items. e.g [0, 2, 3].
       */
      _selectedItems: { type: Array }
    }
  }

  /**
   * Header template for items.
   * It's must be provided.
   */
  get headerTemplate(item) {
    
  }

  /**
   * Content template for items.
   * It's must be provided.
   */
  get contentTemplate(item) {
    
  }

  render() {
    return html`

    `;
  }

}

customElements.define('dw-accordion', DwAccordion);