import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
export const tagName = "my-counter";

export class Counter extends LitElement {
  @property({ type: Number })
  count: number = 5;

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>

        <button type="button" @click=${this.increment}>Increment</button>
      </div>
    `;
  }
}

customElements.define(tagName, Counter);
