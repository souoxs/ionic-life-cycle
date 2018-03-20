import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // ngOnChanges() {
  //   console.log('Home Page - ngOnChanges');
  // }

  // ngOnInit() {
  //   // call when page or component initial
  //   console.log('Home Page - ngOnInit');
  // }

  // ngDoCheck() {
  //   console.log('Home Page - ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('Home Page - ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('Home Page - ngAfterContentChecked');
  // }

  // ngBeforeViewEnter() {
  //   console.log('Home Page - ngBeforeViewEnter');
  // }

  // ngViewEnter() {
  //   // call when view enter
  //   console.log('Home Page - ngViewEnter');
  // }

  // ngAfterViewInit() {
  //   console.log('Home Page - ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('Home Page - ngAfterViewChecked');
  // }

  // ngBeforeViewLeave() {
  //   console.log('Home Page - ngBeforeViewLeave');
  // }

  // ngViewLeave() {
  //   // call when view leave
  //   console.log('Home Page - ngViewLeave');
  // }

  // ngOnDestroy() {
  //   console.log('Home Page - ngOnDestroy');
  // }

  ionViewCanEnter() {
    console.log('Home Page - ionViewCanEnter');
    return true;
  }

  ionViewWillEnter() {
    console.log('Home Page - ionViewWillEnter');
  }

  ionViewDidLoad() {
    console.log('Home Page - ionViewDidLoad');
  }

  ionViewDidEnter() {
    console.log('Home Page - ionViewDidEnter');
  }

  ionViewCanLeave() {
    console.log('Home Page - ionViewCanLeave');
    return true;
  }

  ionViewWillLeave() {
    console.log('Home Page - ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('Home Page - ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('Home Page - ionViewWillUnload');
  }


  goPage(url) {
    if (url === 'contact') {
      this.navCtrl.push(ContactPage);
    }
    else if (url === 'about') {
      this.navCtrl.push(AboutPage);
    }
  }

}
