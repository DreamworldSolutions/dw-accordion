import { LitElement, html, css } from 'lit-element'
import './demo-accordion';

class DemoElement extends LitElement {
  static get styles() {
    return [
      css`
        :host{
          display: block;
        }
      `
    ]
  }
  render() {
    return html`
      <h2>dw-accordion Demo:</h2>
      <demo-accordion></demo-accordion>
    `
  }
}

customElements.define('demo-element', DemoElement);