import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

const href = 'href';
const hrefId = '#' + href;
const token = 'token';
const tokenId = '#' + token;

class PolymerSirenEntityComponentWrapper extends PolymerElement {
  static get is() {
    return 'polymer-siren-entity-component-wrapper';
  }

  static get template() {
    return html`
      <label for=href>Href:</label>
      <input id=href type="text" on-change="onChange"/>
      <label for=token>Token:</label>
      <input id=token type="text" on-change="onChange"/>
      <slot></slot>
    `;
  }

  static get properties() {
    return {};
  }

  get child() {
    return this.shadowRoot.querySelector('slot')
      .assignedNodes()
      .filter(node => node.nodeName !== '#text') // remove whitespace nodes
      .shift();
  }

  get href() {
    return this.shadowRoot.querySelector(hrefId);
  }

  get token() {
    return this.shadowRoot.querySelector(tokenId);
  }

  onChange(e) {
    const child = this.child;

    child.href = this.href.value;
    child.token = this.token.value;
  }
}

window.customElements.define(PolymerSirenEntityComponentWrapper.is, PolymerSirenEntityComponentWrapper);
