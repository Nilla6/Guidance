import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  GoToClass(): void {
    //this.navCtrl.navigateForward();  
  }

  GoToMap(): void{

  }

  GoToOffice():void {

  }
  
}
