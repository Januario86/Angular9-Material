import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  atributoLegal = "qualquer"

  constructor() { }

  ngOnInit(): void {
  }
  
  fazerAlgo(): void {
    console.log('Fazendo Algo!')
  }

}
