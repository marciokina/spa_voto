import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() valorInicial: number = 10;
}
