import { html, css } from 'lit-element';
import { LitElement } from '@dreamworld/pwa-helpers/lit-element.js';
import { repeat } from 'lit-html/directives/repeat.js';
import '@dreamworld/dw-icon/dw-icon';
import '@dreamworld/dw-ripple';
export class DwAccordion extends LitElement {
  constructor() {
    super();
    this._selectedItems = {};
    this._renderedItems = {};
  }

  static get styles() {
    return css`
      :host{
        box-sizing: border-box;
        border: 1px solid var(--dw-accordion-border-color, rgba(0, 0, 0, 0.10));
        display: block;
      }

      .item {
        border-bottom: 1px solid var(--dw-accordion-item-divider-color, rgba(0, 0, 0, 0.10));
      }

      .item:nth-last-of-type(1) {
        border-bottom: none;
      }


      .accordion-header {
        align-items: center;
        box-sizing: var(--dw-accordion-header-box-sizing, border-box);
        cursor: pointer;
        display: flex;
        padding: var(--dw-accordion-header-padding, 16px);
        position: relative;
      }
      
      .accordion_header__title {
        flex: 1;
      }

      .accordion-content {
        box-sizing: var(--dw-accordion-content-box-sizing, border-box);
        display: none;
        padding: var(--dw-accordion-content-padding, 16px);
      }

      .item[selected] .accordion-content {
        display: block;
      }
    `
  }

  static get properties() {
    return {
      /**
       * Input property. 
       * List of items.
       */
      items: { type: Array },

      /**
       * List of index number of selected items. e.g {1: true, 2: false, 3: true}.
       */
      _selectedItems: { type: Object },

      /**
       * Indexes of items which are selected once. e.g {1: true, 2: false, 3: true}.
       */
      _renderedItems: { type: Object }
    }
  }

  /**
   * Header template for items.
   * It's must be provided.
   */
  headerTemplate(item) {
    
  }

  /**
   * Content template for items.
   * It's must be provided.
   */
  contentTemplate(item) {
    
  }

  render() {
    return html`
      ${this.items && repeat(this.items, (item) => item.id, (item, index) => {
        return html`
          <div class="item" ?selected=${this._selectedItems[index]}>
            <div
              @click=${() => { this.__onHeaderClick(index) }}
              class="accordion-header">
              <div class="accordion_header__title">${this.headerTemplate(item)}</div>
              <dw-icon name=${this._selectedItems[index] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}></dw-icon>
              <dw-ripple></dw-ripple>
            </div>
            ${this._selectedItems[index] || this._renderedItems[index] ? html`
              <div
                class="accordion-content">
                ${this.contentTemplate(item)}
              </div>
            ` : ''}
          </div>
        `
      })}
    `;
  }

  /**
   * Collapses all the items.
   */
  collapseAll() {
    this._selectedItems = {};
  }

  /**
   * Updates `_selectedItems` & `_renderedItems`.
   * @param {Number} index Index of the item from which click is triggered.
   * @private
   */
  __onHeaderClick(index) {
    this._selectedItems = {
      ...this._selectedItems,
      [index]: !this._selectedItems[index]
    };
    if (!this._renderedItems[index]) {
      this._renderedItems = {
        ...this._renderedItems,
        [index]: true
      };
    }
  }
}

customElements.define('dw-accordion', DwAccordion);