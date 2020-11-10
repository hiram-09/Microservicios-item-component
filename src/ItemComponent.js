import { html, css, LitElement } from 'lit-element';

export class ItemComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--item-component-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      id: {type: Number},
      nombre: { type: Array },
      precio: { type: Number },
      createAt: {type: String},
      cantidad: {type: Number},
      total: {type: Number}
    };
  }

  constructor() {
    super();
    this.id = "";
    this.precio = 0;
    this.createAt = "";
    this.cantidad = 0;
    this.total = 0;
  }

  render() {
    return html`
      <tr>
        <td>${this.nombre}</td>
        <td>${this.createAt}</td>
        <td>${this.precio}</td>
        <td>${this.cantidad}</td>
        <td>${this.total}</td>
      </tr>
    `;
  }
}
