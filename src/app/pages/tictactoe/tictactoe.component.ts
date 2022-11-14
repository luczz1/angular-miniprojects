import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss'],
})
export class TictactoeComponent implements OnInit {
  values: any = [];
  posicoes: any = [];
  winningValues = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  isntCross = false;
  hasWinner = false;

  constructor() {}

  ngOnInit(): void {}

  enterValue(position: number): void {
    if (!this.posicoes.includes(position) && !this.hasWinner) {
      let quadrado;

      this.values.push({
        position,
        player: this.isntCross,
      });

      this.posicoes.push(position);

      this.isntCross = !this.isntCross;
      quadrado = $(`#btn-${position}`);
      quadrado.html(this.isntCross ? 'x' : 'o');
      this.isntCross
        ? quadrado.css({ color: 'lightgreen' })
        : quadrado.css({ color: 'yellow' });
      this.verifyWin();
    }

    if (this.posicoes.length >= 9 && !this.hasWinner) {
      $('#vencedor').html('Deu velha!');
    }
  }

  verifyWin(): void {
    let crossPositions: any = [];
    let circlePositions: any = [];

    this.values.forEach((element: any) => {
      !element.player
        ? crossPositions.push(element.position)
        : circlePositions.push(element.position);
    });

    for (let index = 0; index < this.winningValues.length; index++) {
      let positions: any = [];
      this.winningValues[index].forEach((val) => {
        if (this.isntCross) {
          positions.push(crossPositions.includes(val));
        } else {
          positions.push(circlePositions.includes(val));
        }

        this.checkWinner(positions[0], positions[1], positions[2]);
      });
    }
  }

  checkWinner(val1: boolean, val2: boolean, val3: boolean): void {
    if (val1 && val2 && val3) {
      $('#vencedor').html(this.isntCross ? 'X ganhou!' : 'O ganhou!');
      this.hasWinner = true;
    }
  }

  clickPreview(id: number): void {
    let quadrado;
    quadrado = $(`#btn-${id}`);
    quadrado.html(this.isntCross ? 'x' : 'o');
    this.isntCross
      ? quadrado.css({ color: 'lightgreen' })
      : quadrado.css({ color: 'yellow' });
  }

  resetPreview(id: number): void {
    let quadrado;
    quadrado = $(`#btn-${id}`);
    quadrado.html('')
  }

  resetGame() {
    this.values = [];
    this.posicoes = [];
    this.isntCross = !this.isntCross;
    this.hasWinner = false;
    for (let index = 1; index < 10; index++) {
      $(`#btn-${index}`).html('');
    }
    $('#vencedor').html('');
  }
}
