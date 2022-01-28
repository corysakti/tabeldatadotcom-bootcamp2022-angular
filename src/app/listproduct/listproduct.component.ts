import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {DataTableDirective} from "angular-datatables";
import {Subject } from 'rxjs';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, {static: false})
  detm!: DataTableDirective;
  dtOptions : DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  form! : FormGroup;

  constructor(private formBuild: FormBuilder, private mast: MasterService) {
    this.form = this.formBuild.group({
      'name': new FormControl(null),
      'description': new FormControl(null)
    })
   }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  find() {
    this.detm.dtInstance.then((dint: DataTables.Api) => {
      dint.draw();
    })
  }

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      ajax: (dTableParameters: any, callback) => {
        dTableParameters.extraParam = {};
        dTableParameters.extraParam['name'] = this.form.controls['name'].value;
        that.mast.listProduct(dTableParameters).subscribe( resp=> {
          callback({
            recordsTotal: resp.RecordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data : resp.data,
            draw : resp.draw,
          });
        });
      },
      searching:false,
      serverSide:true,
      processing:true,
      columns:[{
        title: "ID",
        data: "id",
        orderable: false
      },
      {
        title: "Name",
        data: "name"
      },
      {
        title: "Description",
        data: "description"
      },
      {
        title: "Price",
        data: "price",
        render: $.fn.dataTable.render.number(',','.',0)
      },
      
    ]
    }
  }

}


