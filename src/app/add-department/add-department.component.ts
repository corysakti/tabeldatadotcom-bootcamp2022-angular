

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departemen } from 'model/departemen';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
  
})
export class AddDepartmentComponent implements OnInit {
  formedit! : FormGroup;
  id! : BigInteger;
  pesan! : any[];
  

  department! : Departemen;

  constructor(
    private formBuild: FormBuilder, 
    private mast: MasterService,
    private ruter : Router,
    private route : ActivatedRoute) {

      this.formedit = this.formBuild.group( {
        'nama': new FormControl('',[Validators.required]),
        'description': new FormControl('',[Validators.required]),
      })

   }
   submit() : void{
     let dept = <Departemen>{};
    dept.nama = this.formedit.controls['nama'].value;
    dept.description = this.formedit.controls['description'].value;
     // console.log(this.formedit.getRawValue);
     console.log("variable id setelah dipencet submit :"+this.id)
     if(this.id) {
       dept.id = this.id;
       console.log("ini adalah variable dept id = "+dept.id);
       dept.nama = this.formedit.controls['nama'].value;
       dept.description = this.formedit.controls['description'].value;
      //  dept.id = this.id;
       this.mast.updateDept(dept).subscribe({
         next : hasil => {
           console.log("hasil method updateDept :"+hasil.id +", "+hasil.nama+", "+hasil.description);
         },
         error : err => {
           console.log(err);
         },
         complete : () => {
           console.log("Berhasil Diubah");
         }
       })
     } else {
      this.mast.save(dept).subscribe({
        next : hasil => {
          console.log(hasil.id);
          this.ruter.navigateByUrl("departement/" + hasil.id);
        },
        error : err => {
          // let listError : any[] = err.error.status;
          // let pesan = '';
          
          // for( let i = 0; i < listError.length; i++) {
          //   pesan += listError[i].field+" : "+listError[i].defaultMessage
          //   pesan += "\n";
          // }
          // alert("Error \n"+pesan);
          // console.log(pesan);
          this.pesan = err.error.status;
          alert(this.pesan);
        },
        complete: () => {
          console.log("Berhasil Ditambahkan")
        }
      });
     }
     
     
   }

  

  ngOnInit(): void {
    
      this.route.params.subscribe( rute => {
        console.log(rute);
        this.id = rute['id'];
        if(this.id){
          this.mast.getDeptId(this.id).subscribe( {
            next: value => {
              this.formedit.controls['nama'].setValue(value.nama)
              this.formedit.controls['description'].setValue(value.description)
            }
          })
        }
      })
    
    
  }

  get nama()
  {
    return this.formedit.get('nama')
  }

  get description()
  {
    return this.formedit.get('description')
  }

}
