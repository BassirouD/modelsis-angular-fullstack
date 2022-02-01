import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  products;
  constructor(private productService: ProductService) {
  }

  async ngOnInit() {
    console.log('******');
    this.productService.getAllProduct().subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

}
