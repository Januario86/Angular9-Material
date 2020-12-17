import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './../product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  atributoLegal = "qualquer"

  product: Product ={
    name: '',
    price: 0
  }


  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Criado!');
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
