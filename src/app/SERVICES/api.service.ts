import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //get json data file
  private _jsonUrl = "/assets/DATA/products.json"

  //add http client,it allows us to make http calls
  //for remote server can make HTTP GET/SET request

  constructor(private Http:HttpClient) { }

  //http call is not immediate
  //so put obeservable , 
  //program will wait for it to finish
  //ie it will "observe"
  getJson():Observable<any>{
    return this.Http.get(this._jsonUrl)
  }

}
