import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-cell')
export class AppCell extends LitElement {
  @property() 
  enable:boolean = false;
  row:number = 0;
  column:number = 0;
  modifiedBy: string = ""
  

  static get styles() {
    return css`
      .cell {
          height: 100%;
          border: 1px solid black;
          display:flex;
          justify-content: center;
          align-items:center;
      }
    `;
  }

  
  
  render() {
    return html`
      <div class="cell">
      ${this.enable}
      ${this.modifiedBy}
      </div>
    `;
  }
}