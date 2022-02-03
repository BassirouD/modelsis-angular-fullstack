import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Product} from "../models/Product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host = environment.api;
  myToken = localStorage.getItem('token');

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllProduct(): any {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.get(this.host + 'product/getAll', {headers: headers});
  }

  addProduct(data: Product): any {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.post<Product>(this.host + 'product/save', data, {headers: headers});
  }

  updateProduct(id, data: Product) {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.put<Product>(this.host + 'product/update/' + id, data, {headers: headers});
  }

}
