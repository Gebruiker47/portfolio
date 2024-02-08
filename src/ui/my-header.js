import { LitElement, html, css } from "lit-element";

export class MyHeader extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Your title";
  }
  static styles = css`
    :host {
      .header {
        width: 100%;
        padding: 20px;
        margin: 10px;
        background: var(--header-background);
        color: var(--header-color);
      }
    }
  `;

  render() {
    return html`
      <div class="header">
        ${this.title}
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("my-header", MyHeader);
