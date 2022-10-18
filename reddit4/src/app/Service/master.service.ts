import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  apiurl = 'https://localhost:44308/Employee';
  constructor(private http:HttpClientModule) { }

  GetEmployee():Observable<Employee[]>{
    return this.http.get(this.apiurl);
  }
}
