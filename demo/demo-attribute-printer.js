import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class DemoAttributePrinter extends PolymerElement {
  static get is() {
    return 'demo-attribute-printer';
  }

  static get template() {
    return html`
      <p>[[href]]</p>
      <p>[[token]]</p>
    `;
  }

  static get properties() {
    return {
      href: {
        type: String
      },
      token: {
        type: String
      }
    };
  }


}

window.customElements.define(DemoAttributePrinter.is, DemoAttributePrinter);
