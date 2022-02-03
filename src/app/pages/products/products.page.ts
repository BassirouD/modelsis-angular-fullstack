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
        this.products = data.data;
      }
    );
  }

  async addModalProduct() {
    const modal = await this.modalCtrl.create({
      component: AddProductPage,
      cssClass: 'modal-css_1',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      this.ngOnInit();
    });
  }

  async addModalProductType() {
    const modal = await this.modalCtrl.create({
      component: AddTypePage,
      cssClass: 'modal-css_2',
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      this.ngOnInit();
    });
  }

  async editModalProduct(product) {
    const modal = await this.modalCtrl.create({
      component: AddProductPage,
      cssClass: 'modal-css_1',
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
