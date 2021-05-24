import { LitElement, html, css } from 'lit-element'
import '../dw-accordion';

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
    `
  }
}

customElements.define('demo-element', DemoElement);