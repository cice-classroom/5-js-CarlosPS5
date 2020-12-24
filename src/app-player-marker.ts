import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-player-marker')
export class AppPlayerMarker extends LitElement {
  @property()
  turn:number=0; 
  player:String = "";
  score:number = 0;


  static get styles() {
    return css`
      .player__marker {
        display:flex;
        flex-direction:column;
        align-items: center;
        padding-right: 50px;
        padding-left: 50px;
      }
    `;
  }

  render() {
    return html`
      <div class="player__marker">
      ${this.turn === Number(this.player)? html`<strong><p><label> Player ${this.player}</label></p></strong>`:html`<p><label> Player ${this.player}</label></p>`}
        <p><label>${this.score}</label></p>
      </div>
    `;
  }
}