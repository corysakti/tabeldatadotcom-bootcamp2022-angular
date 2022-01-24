import { Component, OnInit } from '@angular/core';
import { Departemen } from 'model/departemen';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MasterService]
})
export class HomeComponent implements OnInit {

  listDept!: Departemen[];
  constructor(private mast: MasterService) { }

  ngOnInit(): void {
    // apa itu observable ? 
    // apa itu subscribe
    this.mast.listDepartemen().subscribe(
      {
        next: hasil => {
          this.listDept = hasil
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
