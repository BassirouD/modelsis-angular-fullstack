import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  host = environment.api;
  myToken = localStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  getAllProductType(): any {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.get(this.host + 'productType/getAll', {headers: headers});
  }

  addProductType(data): any {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.post(this.host + 'productType/save', data, {headers: headers});
  }
}
