import { Component, OnInit } from '@angular/core';
import { Category } from 'model/category';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listCat!: Category[];
  constructor(private mast: MasterService) { }

  ngOnInit(): void {
    // apa itu observable ? 
    // apa itu subscribe
    this.mast.listCategory().subscribe(
      {
        next: hasil => {
          this.listCat = hasil
        },
        error: err => {
          console.log(err)
        },
        complete: () => {
          alert(' OK !')
        }
      }
    )
      
  }
}
