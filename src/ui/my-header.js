import { LitElement, html, css } from "lit";

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
    .container {
      margin: 10px;
      overflow: hidden;
    }
    .header {
      width: 100%;
      padding: 20px;
      background: var(--header-background);
      color: var(--header-color);
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1 class="header">${this.title}</h1>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("my-header", MyHeader);
