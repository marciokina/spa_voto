import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  compra: number;
  venda: number;

  ngOnInit(): void {
    this.compra = 0;
    this.venda = 0;
  }

  compraValor() {
    this.compra++;
  }

  vendaValor() {
    this.venda++;
  }

  clicked = false;
}
