import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goPage(url) {
    if (url === 'home') {
      this.navCtrl.push(HomePage);
    }
    else if (url === 'contact') {
      this.navCtrl.push(ContactPage);
    }
  }

}
