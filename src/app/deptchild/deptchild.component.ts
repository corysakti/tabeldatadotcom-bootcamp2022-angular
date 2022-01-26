import { Component, Input, OnInit, Output, SimpleChange, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Departemen } from 'model/departemen';

import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-deptchild',
  templateUrl: './deptchild.component.html',
  styleUrls: ['./deptchild.component.css']
})
export class DeptchildComponent implements OnInit {

  @Output() kirimKeParent = new EventEmitter<Departemen>();

  @Input() 
  pesan!: Departemen
  listDept!: Departemen[];

  constructor(private mast: MasterService, private router: Router) { }

  ngOnInit(): void {
    this.mast.listDepartemen().subscribe(
      {
        next: hasil => {
          this.listDept = hasil;
          
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

  ngOnChanges(changes: SimpleChange) {
    if(this.listDept){
      this.listDept.push(this.pesan);
    }else{
      if(this.pesan){
        this.listDept = [this.pesan];
      }
    }
  }

  deleteButton(id : number) : void {
    //  this.mast.getDeptId(this.id);
    console.log(id);

    console.log("id delete button: "+id);
    this.mast.deleteDept(id).subscribe({
      next : hasil => {
        alert("Departement dengan ID :"+id+" Berhasil dihapus");
        
      },
      error : err => {
        alert("ada yang error bray, "+err);
      },
      complete : () => {
        alert("method berhasil dijalankan")
        
      }
    })
  }

  edit(id : number) :void {
    // let dept = <Departemen>{};
    // dept.id = id;
    //    console.log("ini adalah variable dept id = "+dept.id);
    //    dept.nama = "";
    //    dept.description = "";
    //   //  dept.id = this.id;
    //    this.mast.updateDept(dept).subscribe({
    //      next : hasil => {
    //        console.log("hasil method updateDept :"+hasil.id +", "+hasil.nama+", "+hasil.description);
    //      },
    //      error : err => {
    //        console.log(err);
    //      },
    //      complete : () => {
    //        console.log("Berhasil Diubah");
    //        this.reloadComponent();
    //      }
    //    })
    this.kirimKeParent.emit(this.listDept[id])
    console.log(this.listDept[id])
    console.log("id edit: "+id)
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/induk']);
}

  

}
