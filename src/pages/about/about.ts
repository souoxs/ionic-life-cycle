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

  ionViewCanEnter() {
    console.log('About Page - ionViewCanEnter');
    return true;
  }

  ionViewWillEnter() {
    console.log('About Page - ionViewWillEnter');
  }

  ionViewDidLoad() {
    console.log('About Page - ionViewDidLoad');
  }

  ionViewDidEnter() {
    console.log('About Page - ionViewDidEnter');
  }

  ionViewCanLeave() {
    console.log('About Page - ionViewCanLeave');
    return true;
  }

  ionViewWillLeave() {
    console.log('About Page - ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('About Page - ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('About Page - ionViewWillUnload');
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
