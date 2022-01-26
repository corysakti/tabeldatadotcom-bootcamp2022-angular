import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departemen } from 'model/departemen';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-deptinduk',
  templateUrl: './deptinduk.component.html',
  styleUrls: ['./deptinduk.component.css']
})
export class DeptindukComponent implements OnInit {
  
  formedit! : FormGroup;
  kirimpesan! : Departemen;
  pesan! : any[];
  department! : Departemen;
  parentFunction(pesan : String){
    console.warn(pesan);
  }

  

  constructor( private formBuild: FormBuilder, private mast : MasterService, private router : Router) {
    this.formedit = this.formBuild.group( {
      'nama': new FormControl('',[Validators.required]),
      'description': new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    
  }

  terimaPesan($event : any): void {
    console.log($event);
    this.formedit.controls['nama'].setValue($event.nama)
    this.formedit.controls['description'].setValue($event.description);
  }

  simpan() : void {
    let dept = <Departemen>{};
    dept.nama = this.formedit.controls['nama'].value;
    dept.description = this.formedit.controls['description'].value;
    console.log(dept.nama);
    console.log(dept.description);
    this.kirimpesan = dept;
    this.mast.save(dept).subscribe({
      next : hasil => {
        // console.log(hasil.id);
        // this.ruter.navigateByUrl("departement/" + hasil.id);
      },
      error : err => {
        this.pesan = err.error.status;
        alert(this.pesan);
      },
      complete: () => {
        console.log("Berhasil Ditambahkan");
        // this.reloadComponent();
      },
    });
  }

  
  get nama()
  {
    return this.formedit.get('nama')
  }

  get description()
  {
    return this.formedit.get('description')
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/induk']);
}


}
