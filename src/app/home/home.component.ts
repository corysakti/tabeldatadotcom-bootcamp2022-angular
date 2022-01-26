import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departemen } from 'model/departemen';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MasterService]
})
export class HomeComponent implements OnInit {

  formGroup! : FormGroup;
  id! : Uint8Array;
  
  listDept!: Departemen[];
  constructor(
    private mast: MasterService, 
    private ruter : Router,
    private route : ActivatedRoute,
    private formBuild: FormBuilder) {
      this.formGroup = this.formBuild.group( {

      })
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
        this.ruter.url;
      }
    })
  }

  ngOnInit(): void {
    // apa itu observable ? 
    // apa itu subscribe

    this.formGroup = new FormGroup({
      'nama' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required])
    });

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

}
