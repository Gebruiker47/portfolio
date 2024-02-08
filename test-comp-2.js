import { LitElement, html, css } from "lit";

export class TestComp2 extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html` <h1>Test component 2</h1>`;
  }
}
customElements.define("test-comp-2", TestComp2);
