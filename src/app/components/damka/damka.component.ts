import { Component } from '@angular/core';

@Component({
  selector: 'app-damka',
  templateUrl: './damka.component.html',
  styleUrls: ['./damka.component.css']
})
export class DamkaComponent {

  damkaSum = 8

  createDamkaBoard= () => {
    const board: [string[]] = [[]]
    for (let i = 0; i < this.damkaSum; i++) {
      
      let row = []
      for (let j=0; j < this.damkaSum; j++){
       row.push("")
      }
      board[i]= row ?? board.push(row)
    }
    console.log("board:", board)
    return board
  }

  damkaBoardState = this.createDamkaBoard()

  onChangeDamkaBoard = (event: Event) => {
    this.damkaSum = parseInt(
      (event.target as HTMLSelectElement).value
    )
    this.damkaBoardState = this.createDamkaBoard()
  }

  addPion = (move: { x: number, y: number }) => {
    if((move.x+move.y)%2 !== 0)
    this.damkaBoardState[move.x][move.y] = 
      this.damkaBoardState[move.x][move.y] === "X" ? "" : 'X'
  }

}
