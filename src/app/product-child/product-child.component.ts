import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from 'model/Product';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit, OnChanges {

  total : number = 0;
  @Input() 
  product! : Product;

  
  pesan!: Product[];
  

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.pesan){
      this.pesan.push(this.product);
    }else{
      if(this.product){
        this.pesan = [this.product];
      }
    }

    if(this.pesan){
      this.total=0;
      for(let i =0; i < this.pesan.length; i++){
        this.total += this.pesan[i].total;
      }
    }
  }
  

  ngOnInit(): void {
    console.log(this.total);
  }

  delete(i: number):void {
    this.pesan.splice(i, 1);
      this.total=0;
      for(let i =0; i < this.pesan.length; i++){
        this.total += this.pesan[i].total;
      }
  }

  
}
