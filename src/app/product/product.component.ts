import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'model/Product';
import { MasterService } from '../services/master.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild("messageContainer") mContainer!: ElementRef;


  onFocus(): void {
    console.log(this.frmMessage.controls['id'].value)
    this.id = this.frmMessage.controls['id'].value
    this.mast.getProduct(this.id).subscribe({
      next: hasil => {
        this.product = hasil;
        
      },
      error: err => {
        console.log(err)
      },
      complete: () => {

      }
    })
      
}

simpan() : void {
  // let product = <Product>{};
  // product.qty = this.frmMessage.controls['qty'].value;
  // product.price = this.product.price;
  // product.total = product.qty*product.price;
  // product.name = this.product.name;
  // product.id = this.product.id
  // console.log("Form nama = "+product.name);
  // console.log("Form Qty ="+product.qty);
  // console.log("Form Price = "+product.price);
  // console.log("Form Jumlah = "+product.total);
  this.pesan = this.product;
  this.pesan.id = this.frmMessage.controls['id'].value;
  this.pesan.qty = this.frmMessage.controls['qty'].value;
  this.pesan.total = this.pesan.price*this.pesan.qty;
  
  
  this.frmMessage.controls['id'].setValue("")
  this.frmMessage.controls['qty'].setValue("")
  console.log(this.pesan);
}
  
  frmMessage!: FormGroup; 
  product! : Product;
  id! : number;
  pesan! : Product;
  listPro!: Product[];
  
  messages = [
    "this is test of angular focus",
    "this is second paragraph",
  ]

  constructor(private fBuilder: FormBuilder,
              private mast : MasterService) {

   }

  ngOnInit(): void {
    this.frmMessage = this.fBuilder.group({
      id: new FormControl(null),
      qty: new FormControl(null)
    })
  }

  // ngAfterViewInit() {

  // }

  // ngAfterViewChecked(){
  //   this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement
  // }

  // send(){
  //   const message = this.frmMessage.controls['message'].value;
  //   console.log(message);
  //   this.messages.push(message);
  //   this.frmMessage.controls['message'].setValue("");
  // }

}
