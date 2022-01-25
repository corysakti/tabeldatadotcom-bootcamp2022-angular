import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departemen } from 'model/departemen';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  
})
export class AddDepartmentComponent implements OnInit {
  formedit! : FormGroup;

  department! : Departemen;

  constructor(private formBuild: FormBuilder, private mast: MasterService) {

   }
   submit() : void{
     let dept = <Departemen>{};
    dept.nama = this.formedit.controls['nama'].value;
    dept.description = this.formedit.controls['description'].value;
     // console.log(this.formedit.getRawValue);
     
     this.mast.save(dept).subscribe({
       next : hasil => {
         this.department = hasil;
       },
       error : err => {
         console.log(err)
       },
       complete: () => {
         console.log("Berhasil Ditambahkan")
       }
     });
     
   }

  ngOnInit(): void {
    this.formedit = this.formBuild.group( {
      'id': [null],
      'nama': [Validators.required],
      'description': [Validators.required]
    })
  }

}
