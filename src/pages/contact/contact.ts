import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  canGoBack() {
    return false;
  }

  goPage(url) {
    if (url === 'home') {
      this.navCtrl.push(HomePage);
    }
    else if (url === 'about') {
      this.navCtrl.push(AboutPage);
    }
  }

}
