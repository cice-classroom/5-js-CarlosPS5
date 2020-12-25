import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-button-again')
export class AppButtonAgain extends LitElement {
  @property() 
 message:string = "Play again"
  

  static get styles() {
    return css`
      .button {
          
      }
    `;
  }

  
  
  render() {
    return html`
      <div class="button">
      <button value=${this.message}>${this.message}</button>
      </div>
    `;
  }
}