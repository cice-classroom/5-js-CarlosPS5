import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-board')
export class AppBoard extends LitElement {
  @property() 
  cells: {row:number,column:number,enable:boolean}[] = []

  player: string = ""
  turn: number = 1

  static get styles() {
    return css`
      .board {
          align-self: center;
          background-color: #6FE896;
          width: 400px;
          height : 400px;
          border: 1px solid black;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows:
          1fr
          1fr
          1fr;
      }
    `;
  }
  

  render() {
    return html`
      <div class="board">
      ${this.cells.map(cell => html`<app-cell @click="${() => this.cellClicked(cell,this.turn)}" .row=${cell.row} .column=${cell.column} .enable=${cell.enable}><app-cell>`)}
      </div>
    `;
  }

  cellClicked(cell:{row:number,column:number,enable:boolean},turn:number) {
    console.log("Clicada celda " + cell.row + "-" + cell.column + " con estado " + cell.enable)
    if(cell.enable === true) {
        console.log("Realizando jugada para Player " + this.turn)
        const customEvent = new CustomEvent('on-cell-clicked', {
            bubbles:true,
            composed:true,
            detail: {
                cell:cell,
                turn:turn
            },
            
            })
        this.dispatchEvent(customEvent)
    }else{
        alert("Esta celda ya está clickada, prueba con otra");
    }
    }
}