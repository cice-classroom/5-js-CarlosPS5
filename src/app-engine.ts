import type { Cell } from "./app-board"

export class Engine { 
    tablero:Cell[]

    constructor(cells:Cell[]){
        this.tablero = cells
    }

    
    

    board():Cell[] {
        return this.tablero
    }

    play(jugada:{row:number,column:number,player:string}):Cell[] {
        this.tablero = this.tablero.map(cell => {
            if(cell.row === jugada.row && cell.column === jugada.column) {
                return {...cell,enable:false,modifiedBy:jugada.player}
            } else {
                return cell
            }
        })
        return this.tablero
    }

    checkWin(player:string):string {
        const jugador:Cell[] = this.tablero.filter(cell => {return cell.enable===false && cell.modifiedBy===player})
        //ROWS
        if(jugador.filter(cell => {return cell.row === 1}).length === 3) {
            return player
        }
        if(jugador.filter(cell => {return cell.row === 2}).length === 3) {
            return player
        }
        if(jugador.filter(cell => {return cell.row === 3}).length === 3) {
            return player
        }
        //COLUMNS
        if(jugador.filter(cell => {return cell.column === 1}).length === 3) {
            return player
        }
        if(jugador.filter(cell => {return cell.column === 2}).length === 3) {
            return player
        }
        if(jugador.filter(cell => {return cell.column === 3}).length === 3) {
            return player
        }
        //DIAGONALLY
        if(jugador.filter(cell => {return cell.column === cell.row}).length === 3) {
            return player
        }
        if(jugador.filter(cell => {return cell.row + cell.column === 4}).length === 3) {
            return player
        }
        return ""
    }

    checkDraw():boolean {
        if(this.tablero.filter(cell => {return cell.enable === true}).length === 0) {
            return true
        }
        return false
    }

    disableCells():Cell[] {
        this.tablero = this.tablero.map(cell => {
            if(cell.enable === true) {
                return {
                    ...cell,enable:false,modifiedBy:""
                }
            }
            return cell
        })
        return this.tablero
    }

 

}