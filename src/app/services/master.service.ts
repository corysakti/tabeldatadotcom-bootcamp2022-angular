import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

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
}
