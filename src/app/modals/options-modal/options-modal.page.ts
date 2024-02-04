import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-options-modal',
  templateUrl: './options-modal.page.html',
  styleUrls: ['./options-modal.page.scss'],
})
export class OptionsModalPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
