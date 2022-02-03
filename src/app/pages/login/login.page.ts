import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {User} from "../../models/Utilisateur.model";
import {AuthService} from "../../services/auth.service";
import {AddTypePage} from "../modals/add-type/add-type.page";
import {InscriptionPage} from "../inscription/inscription.page";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private router: Router, private modalController: ModalController, private loadingController: LoadingController,
                private toastController: ToastController,
                private authService: AuthService) {
    }

    ngOnInit() {
    }

    login1() {
        this.router.navigateByUrl('/tabs/home');
    }

    async onLogin(user: User) {
        if (user.username !== '' && user.password !== ''){
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
                    this.authService.parseJWT();
                    this.presentToast('Connexion réussie !', "success");
                    this.router.navigateByUrl('/tabs/products');
                    loading.dismiss()
                }, error => {
                    this.presentToast('Erreur !', "warning");
                    loading.dismiss()
                }
            );
        }else {
            this.presentToast('Aucun champ ne doit être vide!', 'warning')
        }

    }

    async presentToast(msg, color) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            color: color,
            mode: 'ios'
        });
        toast.present();
    }

    async creationCompte() {
        const modal = await this.modalController.create({
            component: InscriptionPage,
            cssClass: 'modal-css',
        });
        await modal.present();
    }

}
