import { LitElement, html, css } from "lit";

export class TestComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<h1>TEST component</h1>`;
  }
}
customElements.define("test-component", TestComponent);
