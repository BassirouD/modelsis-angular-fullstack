import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {error} from "protractor";

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.page.html',
    styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

    compteFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder, private auth: AuthService,
                private modal: ModalController, private toastController: ToastController,
                private loadingController: LoadingController) {
    }

    ngOnInit() {
        this.compteFormGroup = this._formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required],
            'confirmedPassword': ['', Validators.required],
        });
    }

    async createCompte() {
        if (this.compteFormGroup.value.username !== '' && this.compteFormGroup.value.password !== '' && this.compteFormGroup.value.confirmedPassword !== ''){
            if (this.compteFormGroup.value.username !== this.compteFormGroup.value.confirmedPassword){
                const loading = await this.loadingController.create({
                    message: "Veuillez patienter !",
                    duration: 10000,
                    mode: 'ios'
                });
                await loading.present()
                this.auth.register(this.compteFormGroup.value).subscribe(
                    (data) => {
                        this.presentToast('Incription réussie !', "success");
                        loading.dismiss()
                        this.Close();
                    }, error => {
                        loading.dismiss();
                        this.presentToast('Error !', "warning");
                    }
                )
            }else {
                this.presentToast('Les mots de passe ne sont pas identiques!', 'warning')
            }
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

    Close() {
        this.modal.dismiss()
    }
}
