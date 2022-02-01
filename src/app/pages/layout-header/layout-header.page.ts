import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.page.html',
  styleUrls: ['./layout-header.page.scss'],
})
export class LayoutHeaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
