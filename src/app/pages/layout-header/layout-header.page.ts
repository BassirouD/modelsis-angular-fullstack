import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActionSheetController, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.page.html',
  styleUrls: ['./layout-header.page.scss'],
})
export class LayoutHeaderPage implements OnInit {

  username;

  constructor(private router: Router, private actionSheetController: ActionSheetController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  goOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  async presentLogout() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'ios',
      header: 'Souhaitez-vous vraiment vous déconnecter?',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Déconnexion',
        role: 'destructive',
        handler: () => {
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigateByUrl('/login');
        }
      }, {
        text: 'Annuler',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

}
