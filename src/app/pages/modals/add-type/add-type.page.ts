import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductTypeService} from "../../../services/product-type.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.page.html',
  styleUrls: ['./add-type.page.scss'],
})
export class AddTypePage implements OnInit {

  productTypeFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private productTypeService: ProductTypeService,private modal: ModalController) { }

  ngOnInit() {
    this.productTypeFormGroup = this._formBuilder.group({
      'name': ['', Validators.required],
    });
  }

  createProductType() {
    this.productTypeService.addProductType(this.productTypeFormGroup.value)
      .subscribe((data) => {
        console.log('succes' + data);
        this.modal.dismiss();
      }, error => {
        console.log(error);
      });
  }

  Close(){
    this.modal.dismiss()
  }

}
