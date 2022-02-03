import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/Utilisateur.model";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = environment.api;
  jwtToken !: any;
  user_id!: number;
  username!: string;
  roles!: Array<any>;

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post(this.host + 'login', user, {observe: 'response'});
  }

  register(user: User) {
    return this.http.post(this.host + 'register', user, {observe: 'response'});
  }

  saveToken(jwt: any) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    this.parseJWT();
  }

  parseJWT() {
    const jwtHelpers = new JwtHelperService();
    let objJWT = jwtHelpers.decodeToken(this.jwtToken);
    this.username = objJWT.sub;
    localStorage.setItem('username', this.username);
    this.user_id = objJWT.user_id;
    console.log(objJWT.user_id);
    this.roles = objJWT.roles;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }


}
