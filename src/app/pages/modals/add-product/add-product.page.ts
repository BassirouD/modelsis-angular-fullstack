import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ModalController, ToastController} from "@ionic/angular";
import {ProductTypeService} from "../../../services/product-type.service";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.page.html',
    styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

    productFormGroup: FormGroup;
    productTypes: any[];
    @Input() product;
    selected_category_id: number = 0;
    category_id: number = 0;

    constructor(private _formBuilder: FormBuilder, private productTypeService: ProductTypeService,
                private productSrv: ProductService, private modal: ModalController, private toastController: ToastController) {
    }

    ngOnInit() {
        this.productTypeService.getAllProductType().subscribe(
            (data) => {
                this.productTypes = data
            }
        );
        if (!this.product) {
            this.productFormGroup = this._formBuilder.group({
                'name': ['', Validators.required],
                'idTypeProduct': ['', Validators.required],
            });
        } else {
            this.selected_category_id = this.product.prodcutType.id;
            this.productFormGroup = this._formBuilder.group({
                'name': [this.product.name, Validators.required],
                'idTypeProduct': [this.product.type, Validators.required],
            });
        }
    }

    createProduct() {
        if (this.productFormGroup.value.name !== '' && this.productFormGroup.value.idTypeProduct !== '') {
            this.productSrv.addProduct(this.productFormGroup.value).subscribe((data) => {
                    this.presentToast('Success', "success");
                    this.modal.dismiss();
                }, error => {
                });
        } else {
            this.presentToast('les deux champs sont obligatoires', "warning");
        }
    }

    updateProduct() {
        if (this.productFormGroup.value.name && this.productFormGroup.value.idTypeProduct) {
            console.log('idProduct: ' + this.product.id)
            this.productSrv.updateProduct(this.product.id, this.productFormGroup.value).subscribe((data) => {
                this.presentToast('Success', "success");
                this.modal.dismiss();
            }, error => {
                console.log(error)
            })
        } else {
            this.presentToast('les deux champs sont obligatoires', "warning");
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
