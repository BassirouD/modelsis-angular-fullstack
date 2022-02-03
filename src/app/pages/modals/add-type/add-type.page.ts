import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductTypeService} from "../../../services/product-type.service";
import {ModalController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-add-type',
    templateUrl: './add-type.page.html',
    styleUrls: ['./add-type.page.scss'],
})
export class AddTypePage implements OnInit {

    productTypeFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder, private toastController: ToastController,
                private productTypeService: ProductTypeService, private modal: ModalController) {
    }

    ngOnInit() {
        this.productTypeFormGroup = this._formBuilder.group({
            'name': ['', Validators.required],
        });
    }

    createProductType() {
        if (this.productTypeFormGroup.value.name){
            this.productTypeService.addProductType(this.productTypeFormGroup.value).subscribe(
                (data) => {
                    if (data.message == "OK") {
                        this.presentToast('Enregistré avec success', "success");
                        this.modal.dismiss();
                    } else if (data.message == "ERROR 500") {
                        this.presentToast('Une erreur est survenue', 'warning');
                    }else if (data.message == "Ce type existe déja") {
                        this.presentToast(data.message, 'warning');
                    }
                }, error => {
                    console.log(error);
                });
        }else {
            this.presentToast('Le champ ne  doit pas être  vide', 'warning');
        }
    }

    Close() {
        this.modal.dismiss()
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

}
