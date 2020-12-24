import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 18px;
      }

      .tic_tac_toe {
        width: 100%;
        display:flex;
        justify-content: center;
      }
    `;
  }

  @property()
  cells: {row:number,column:number,enable:boolean,modifiedBy:string}[] = [
    {row:1,column:1,enable:true,modifiedBy:""},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
    {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
    {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
  ]
  turn: number = 1


  

  render() {
    return html`
      <div class="wrapper">
        <h1>Tic Tac Toe Game</h1>
        <div class="tic_tac_toe">
        ${console.log("Es turno de Player " + this.turn)}
          <app-board @on-cell-clicked=${this.cellClicked} .cells=${this.cells} .turn=${this.turn}></app-board>
          <app-marker .turn=${this.turn}></app-marker>
        </div>
      </div>
    `;
  }

  cellClicked(event:CustomEvent) {
    this.cells = this.cells.map(cell => {
      if(cell.row === event.detail.cell.row && cell.column === event.detail.cell.column) {
        if(event.detail.turn === 1) {
          return {
            ...cell,enable:false,modifiedBy:"X"
          }
        } 
        return {
          ...cell,enable:false,modifiedBy:"O"
        }
      }
      return cell
      })
    console.log("Jugada para Player " + this.turn + " realizada")
    event.detail.turn === 1? this.turn = 2 : this.turn = 1
  }
}
