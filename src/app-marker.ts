import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-marker')
export class AppMarker extends LitElement {
  @property()
   turn:number = 1
   player1: number = 1;
   scorePlayer1: number = 0;
   player2: number = 2;
   scorePlayer2: number = 0;

  static get styles() {
    return css`
      .marker {
          display: flex;
          align-self: center;
      }
    `;
  }

  render() {
    return html`
      <div class="marker">
      ${console.log("En el marcador, el turno es de " + this.turn)}
      <app-player-marker .player=${this.player1} .score=${this.scorePlayer1} .turn=${this.turn}></app-player-marker>
      <app-player-marker .player=${this.player2} .score=${this.scorePlayer2} .turn=${this.turn}></app-player-marker>
      </div>
    `;
  }
}