import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";

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

  addProduct(data): any {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.post(this.host + 'product/save', data, {headers: headers});
  }

  updateProduct(id, data) {
    const headers = new HttpHeaders({'authorization': "Bearer " + this.myToken});
    return this.http.put(this.host + 'product/update/' + id, data, {headers: headers});
  }

}
