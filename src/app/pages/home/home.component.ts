import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games = [
    {
      title: 'Jogo da Velha',
      description: 'Dois jogadores se enfretam para ver quem consegue completar a linha com seu X ou O.',
      url: '/tictactoe',
      image: '../../../assets/image/blur.png'
    },
    {
      title: 'ToDo List',
      description: 'Uma lista de afazeres, sendo possível adicionar, editar e excluir atividades.',
      url: '/todo',
      image: '../../../assets/image/blur.png'
    },
    {
      title: '...?',
      description: 'Em breve.',
      url: '/',
      image: '../../../assets/image/blur.png'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
