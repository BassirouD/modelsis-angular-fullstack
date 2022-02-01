import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {User} from "../../models/Utilisateur.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loadData = {login: '', password: ''};

  constructor(private router: Router, private modalController: ModalController, private loadingController: LoadingController,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  login1() {
    this.router.navigateByUrl('/tabs/home');
  }

  async onLogin(user: User) {
    const loading = await this.loadingController.create({
      message: "Veuillez patienter !",
      duration: 10000,
      mode: 'ios'
    });
    await loading.present()

    this.authService.login(user).subscribe(
      resp => {
        const jwt = resp.headers.get('authorization');
        this.authService.saveToken(jwt);
        console.log("Utilisateur"+user);
        this.router.navigateByUrl('/tabs/products');
        loading.dismiss()
      }, error => {
        this.router.navigateByUrl("/login");
        loading.dismiss()
      }
    );
  }


}
