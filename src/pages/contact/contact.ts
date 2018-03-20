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

  ionViewCanEnter() {
    console.log('Contact Page - ionViewCanEnter');
    return true;
  }

  ionViewWillEnter() {
    console.log('Contact Page - ionViewWillEnter');
  }

  ionViewDidLoad() {
    console.log('Contact Page - ionViewDidLoad');
  }

  ionViewDidEnter() {
    console.log('Contact Page - ionViewDidEnter');
  }

  ionViewCanLeave() {
    console.log('Contact Page - ionViewCanLeave');
    return true;
  }

  ionViewWillLeave() {
    console.log('Contact Page - ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('Contact Page - ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('Contact Page - ionViewWillUnload');
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
