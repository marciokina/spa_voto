import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css'],
})
export class VendaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() valorInicial: number = 10;
}
