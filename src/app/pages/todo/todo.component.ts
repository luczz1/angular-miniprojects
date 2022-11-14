import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  dadosItens: any = [];

  constructor() {}

  ngOnInit(): void {
    this.dadosItens = localStorage.getItem('items')
    this.dadosItens = this.dadosItens ? JSON.parse(this.dadosItens) : [];
  }

  public getLastID(): number {
    if (this.dadosItens.length > 0) {
      let ids = this.dadosItens.map((attr: any) => {
        return attr.id;
      });

      return Math.max(...ids) + 1;
    }
    return 1;
  }

  public addToList(value: string): void {
    if (value) {
      let obj = {
        id: this.getLastID(),
        descricao: value,
      };

      this.dadosItens.push({
        id: obj.id,
        descricao: obj.descricao
      });

      localStorage.setItem('items', JSON.stringify(this.dadosItens));
      $('#add-item-text').val('');

      return;
    }
    alert('Não pode ser vazio.')
  }

  public deleteItem(id: number, descricao: string): void {
    const deleteID = this.dadosItens.findIndex((attr: any) => attr.id == id)

    if (confirm(`Quer mesmo excluir o item ${descricao}?`)) {
      this.dadosItens.splice(deleteID, 1)

    localStorage.setItem('items', JSON.stringify(this.dadosItens));
    }
  }

  public editItem(id: number, novadescricao: string) {
    let selectedItem = this.dadosItens.find((attr: any) => attr.id == id)
    selectedItem.descricao = novadescricao;

    localStorage.setItem('items', JSON.stringify(this.dadosItens));
  }
}
