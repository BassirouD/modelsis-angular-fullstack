import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ModalController} from "@ionic/angular";
import {ProductTypeService} from "../../../services/product-type.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productFormGroup: FormGroup;
  productTypes: any[];
  @Input() product

  constructor(private _formBuilder: FormBuilder, private productTypeService: ProductTypeService,
              private productSrv: ProductService, private modal: ModalController) {
  }

  ngOnInit() {
    this.productTypeService.getAllProductType().subscribe(
      (data) => {
        console.log(data);
        this.productTypes = data
      }
    );
    if (!this.product) {
      this.productFormGroup = this._formBuilder.group({
        'name': ['', Validators.required],
        'type': ['', Validators.required],
      });
    } else {
      this.productFormGroup = this._formBuilder.group({
        'name': [this.product.name, Validators.required],
        'type': [this.product.type, Validators.required],
      });
    }
  }

  createProduct() {
    this.productSrv.addProduct(this.productFormGroup.value)
      .subscribe((data) => {
        console.log('succes ' + JSON.stringify(data));
        console.log('succes type: ' + this.productFormGroup.value.type);
        this.modal.dismiss();
      }, error => {
        console.log(this.productFormGroup.value);
      });
  }

  updateProduct() {
    this.productSrv.updateProduct(this.product.id, this.productFormGroup.value).subscribe((data) => {
      console.log('update succes'+data);
      this.modal.dismiss();
    }, error => {
      console.log(error)
    })
  }

  Close() {
    this.modal.dismiss()
  }


}
