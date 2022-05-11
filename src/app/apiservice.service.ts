import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( private _http:HttpClient) { }
  apiUrl='http://localhost:2500/users';
  roleUrl='http://localhost:2500/users';

getAll():Observable<any>
{
  return this._http.get(`${this.apiUrl}`);
}

createData(data:any):Observable<any>
{
 // console.log(data,'createapi=>');
  
  return this._http.post(`${this.apiUrl}`,data);
}

deleteData(id:any):Observable<any>{
  let ids=id;
  return this._http.delete(`${this.apiUrl}/${ids}`);
}

updateData(data:any,id:any):Observable<any>{
  let ids=id;
return this._http.put(`${this.apiUrl}/${ids}`,data);
}

getSingleData(id:any):Observable<any>
{
  let ids=id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}
getRoleValues():Observable<any>{
return this._http.get(`${this.roleUrl}`);
}
}
