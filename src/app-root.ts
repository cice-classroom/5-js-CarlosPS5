import { customElement, property, LitElement, html, css } from 'lit-element';
import type { Cell } from './app-board';
import {Engine} from './app-engine'


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
  cells: Cell[] = [
    {row:1,column:1,enable:true,modifiedBy:""},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
    {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
    {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
  ]
  turn: number = 1
  engine: Engine = new Engine(this.cells)
  winner: string = ""
  isDraw: boolean = false
  scoreX: number = 0
  scoreO: number = 0

  

  render() {
    return html`
      <div class="wrapper">
        <h1>Tic Tac Toe Game</h1>
        <div class="tic_tac_toe">
        ${console.log("Es turno de Player " + this.turn)}
          <app-board @on-cell-clicked=${this.cellClicked} .cells=${this.cells} .turn=${this.turn}></app-board>
          <app-marker .scorePlayer1=${this.scoreX} .scorePlayer2=${this.scoreO} .turn=${this.turn}></app-marker>
          ${this.winner!="" || this.isDraw != false? html`<app-button-again @click=${this.playAgain}  style="align-self:center;"></app-button-again>` : html``}
        </div>
      </div>
    `;
  }

  cellClicked(event:CustomEvent) {
    this.cells = this.engine.play({row:event.detail.cell.row,column:event.detail.cell.column,player:event.detail.turn === 1? "X" : "O"})
    this.winner = this.engine.checkWin(event.detail.turn === 1? "X" : "O")
  
    if(this.winner != "") {
      this.cells = this.engine.disableCells()
      if(event.detail.turn === 1) {
        alert("HA GANADO EL PLAYER 1!")
        this.scoreX++
      } else {
        alert("HA GANADO EL PLAYER 2!")
        this.scoreO++
      }
    } else {
      this.isDraw = this.engine.checkDraw()
      if(this.isDraw) {
        alert("HABÉIS EMPATADO!")
      } 
    }
    console.log("Jugada para Player " + this.turn + " realizada")
    event.detail.turn === 1? this.turn = 2 : this.turn = 1
  }

  playAgain() {
    this.cells = [
      {row:1,column:1,enable:true,modifiedBy:""},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
      {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
      {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
    ]
    this.winner = ""
    this.turn = 1
    this.isDraw = false
    this.engine = new Engine(this.cells)
  }

}



