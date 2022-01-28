import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Departemen } from 'model/departemen';
import { Datatablerequest } from 'model/datatablerequest';
import { Datatableresponse } from 'model/datatableresponse';


//inject ?
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // ini buat apa
  constructor(private http: HttpClient) {

   }

   //pendekatan reaktif ? gadapet langsung hasil? asynchronous mirip mirip
   //ambil url backend
   // apa itu piping?
   // rxjs -> reactive JS

   listCategory(): Observable<any> {
     return this.http.get(environment.baseUrl+'/category')
   }
   listDepartemen(): Observable<any> {
     return this.http.get(environment.baseUrl+'/department/list')
     .pipe(map(data => data))
   }

   save(dept: Departemen): Observable<any> {
     
     if(dept.id){
      //  url = "/update";
     }
     return this.http.post(environment.baseUrl+'/department/save',dept)
     .pipe(map(data => data))
   }

   getDeptId(id:number): Observable<any> {
    return this.http.get(environment.baseUrl+'/department/findById/'+id)
    .pipe(map(data => data))
  }

  updateDept(Dept:Departemen): Observable<any> {
    return this.http.put(environment.baseUrl+'/department/'+Dept.id,Dept).pipe(map(data =>data))
  }

  deleteDept(id:number): Observable<any> {
    return this.http.delete(environment.baseUrl+'/department/'+id)
  }

  getProduct(id:number): Observable<any> {
    return this.http.get(environment.baseUrl+'/product/'+id)
  }

  listProduct(datatableParameter:any): Observable<Datatableresponse> {
    const dtReq = new Datatablerequest();
    dtReq.draw = datatableParameter.draw;
    dtReq.length = datatableParameter.length;
    dtReq.start = datatableParameter.start;
    dtReq.sortCol = datatableParameter.order[0].column;
    dtReq.sortDir = datatableParameter.order[0].dir;
    dtReq.extraParam = datatableParameter.extraParam;
    console.log(dtReq);
    return this.http.post(environment.baseUrl+"/product/list",dtReq)
    .pipe(map(data=>data as Datatableresponse));
  }
}
