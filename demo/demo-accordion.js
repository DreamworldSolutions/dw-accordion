import { LitElement, html, css } from '@dreamworld/pwa-helpers/lit.js';
import { DwAccordion } from '../dw-accordion';

class DemoAccordion extends DwAccordion {
  constructor() {
    super();
    this.items = [{
      title: 'First Title',
      content: 'First content'
    },
    {
      title: 'Second Title',
      content: 'Second content'
      },
      {
        title: 'Third Title',
        content: 'Third content'
      },
      {
        title: 'Fourth Title',
        content: 'Fourth content'
      },
      {
        title: 'Fifth Title',
        content: 'Fifth content'
      }]
  }
  
  
  headerTemplate(item) {
    return html`<div>${ item.title }</div>`
  }

  contentTemplate(item) {
    return html`<h2>${ item.title }</h2>`
  }

}

customElements.define('demo-accordion', DemoAccordion);