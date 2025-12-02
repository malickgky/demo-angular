import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class Products {
  products = [
    {id : 1, name : "Computer", price : 2200,selector: true},
    {id : 2,name : "Imprimante", price : 1300,selector: true},
    {id : 3,name : "Interphone", price : 1500,selector: true},
  ]

}
