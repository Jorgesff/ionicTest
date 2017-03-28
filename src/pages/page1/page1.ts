import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Tab1} from '../tab-pages/tab1/tab1';
import {Tab2} from '../tab-pages/tab2/tab2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  tab1 : any;
  tab2 : any;

  constructor(public navCtrl: NavController) {
    this.tab1 = Tab1;
    this.tab2 = Tab2;
  }

}
