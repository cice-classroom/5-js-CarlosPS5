import type { Cell } from './app-board'
import {Engine as Tablero} from './app-engine'

describe('app-engine', () => {
    it('Should return the status board', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:false,modifiedBy:"X"},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
          ]
        const tablero = new Tablero(givenBoard)
        //WHEN
        const actual = tablero.board()
        //THEN
        expect(actual).toEqual([
            {row:1,column:1,enable:false,modifiedBy:"X"} , {row:1,column:2,enable:true,modifiedBy:""} , {row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""} , {row:2,column:2,enable:true,modifiedBy:""} , {row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""} , {row:3,column:2,enable:true,modifiedBy:""} , {row:3,column:3,enable:true,modifiedBy:""}])
    })

    it('Should return the status board after a play', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:false,modifiedBy:"X"},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
          ]
        const tablero = new Tablero(givenBoard)
        //WHEN
        const actual = tablero.play({row:1,column:2,player:"O"})
        //THEN
        expect(actual).toEqual([
            {row:1,column:1,enable:false,modifiedBy:"X"} , {row:1,column:2,enable:false,modifiedBy:"O"} , {row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""} , {row:2,column:2,enable:true,modifiedBy:""} , {row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""} , {row:3,column:2,enable:true,modifiedBy:""} , {row:3,column:3,enable:true,modifiedBy:""}])
    })

    it('Should check player´s turn', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:true,modifiedBy:""},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
          ]
        const tablero = new Tablero(givenBoard)
        //WHEN
        tablero.play({row:2,column:2,player:"X"})
        tablero.play({row:1,column:3,player:"O"})
        const actual2 = tablero.play({row:3,column:2,player:"X"})
        //THEN
        expect(actual2).toEqual([
            {row:1,column:1,enable:true,modifiedBy:""} , {row:1,column:2,enable:true,modifiedBy:""} , {row:1,column:3,enable:false,modifiedBy:"O"},
            {row:2,column:1,enable:true,modifiedBy:""} , {row:2,column:2,enable:false,modifiedBy:"X"} , {row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""} , {row:3,column:2,enable:false,modifiedBy:"X"} , {row:3,column:3,enable:true,modifiedBy:""}])
    })

    it('Should check if a player wins', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:true,modifiedBy:""},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
          ]
        const player = "X"
        const tablero = new Tablero(givenBoard)
        //WHEN
        tablero.play({row:3,column:1,player:"X"})
        tablero.play({row:1,column:3,player:"O"})
        tablero.play({row:2,column:2,player:"X"})
        tablero.play({row:1,column:2,player:"O"})
        tablero.play({row:1,column:3,player:"X"})
        const actual = tablero.checkWin(player)
        //THEN
        expect(actual).toEqual("X")
    })

    it('Should return the status board after a play', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:false,modifiedBy:"X"},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
          ]
        const tablero = new Tablero(givenBoard)
        //WHEN
        const actual = tablero.play({row:1,column:2,player:"O"})
        //THEN
        expect(actual).toEqual([
            {row:1,column:1,enable:false,modifiedBy:"X"} , {row:1,column:2,enable:false,modifiedBy:"O"} , {row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""} , {row:2,column:2,enable:true,modifiedBy:""} , {row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""} , {row:3,column:2,enable:true,modifiedBy:""} , {row:3,column:3,enable:true,modifiedBy:""}])
    })

    it('Should check if it is a draw game', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:true,modifiedBy:""},{row:1,column:2,enable:true,modifiedBy:""},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:true,modifiedBy:""},{row:2,column:3,enable:true,modifiedBy:""},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:true,modifiedBy:""}
          ]
        const tablero = new Tablero(givenBoard)
        //WHEN
        tablero.play({row:1,column:1,player:"X"})
        tablero.play({row:1,column:2,player:"O"})
        tablero.play({row:1,column:3,player:"X"})
        tablero.play({row:2,column:1,player:"O"})
        tablero.play({row:2,column:2,player:"X"})
        tablero.play({row:2,column:3,player:"O"})
        tablero.play({row:3,column:1,player:"O"})
        tablero.play({row:3,column:2,player:"X"})
        tablero.play({row:3,column:3,player:"O"})

        const actual = tablero.checkDraw()
        //THEN
        expect(actual).toEqual(true)
    })

    it('Should disable cells after a win', () => {
        //GIVEN
        const givenBoard:Cell[]= [
            {row:1,column:1,enable:false,modifiedBy:"X"},{row:1,column:2,enable:false,modifiedBy:"O"},{row:1,column:3,enable:true,modifiedBy:""},
            {row:2,column:1,enable:true,modifiedBy:""},{row:2,column:2,enable:false,modifiedBy:"X"},{row:2,column:3,enable:false,modifiedBy:"O"},
            {row:3,column:1,enable:true,modifiedBy:""},{row:3,column:2,enable:true,modifiedBy:""},{row:3,column:3,enable:false,modifiedBy:"X"}
          ]
        const tablero = new Tablero(givenBoard)
        //WHEN
        const actual = tablero.disableCells()
        //THEN
        expect(actual).toEqual([
            {row:1,column:1,enable:false,modifiedBy:"X"},{row:1,column:2,enable:false,modifiedBy:"O"},{row:1,column:3,enable:false,modifiedBy:""},
            {row:2,column:1,enable:false,modifiedBy:""},{row:2,column:2,enable:false,modifiedBy:"X"},{row:2,column:3,enable:false,modifiedBy:"O"},
            {row:3,column:1,enable:false,modifiedBy:""},{row:3,column:2,enable:false,modifiedBy:""},{row:3,column:3,enable:false,modifiedBy:"X"}
          ])
    })


})