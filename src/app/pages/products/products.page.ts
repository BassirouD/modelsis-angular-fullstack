import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ModalController} from "@ionic/angular";
import {AddProductPage} from "../modals/add-product/add-product.page";
import {AddTypePage} from "../modals/add-type/add-type.page";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products;
  constructor(private productService: ProductService,private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.productService.getAllProduct().subscribe(
      (data)=>{
        this.products = data;
        console.log(this.products);
      }
    );
  }

  async addModalProduct() {
    const modal = await this.modalCtrl.create({
      component: AddProductPage,
      cssClass: 'cal-modal-patient',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      this.ngOnInit();
    });
  }

  async addModalProductType() {
    const modal = await this.modalCtrl.create({
      component: AddTypePage,
      cssClass: 'cal-modal-patient',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      this.ngOnInit();
    });
  }

  async editModalProduct(product) {
    const modal = await this.modalCtrl.create({
      component: AddProductPage,
      cssClass: 'cal-modal-patient',
      componentProps: {
        product: product
      }
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      this.ngOnInit();
    });
  }

}
