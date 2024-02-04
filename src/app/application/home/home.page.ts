import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalController, LoadingController, AlertController, NavParams } from '@ionic/angular';
import { NavParamsService } from 'src/app/services/nav-params.service';
import { OptionsModalPage } from 'src/app/modals/options-modal/options-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {
    this.folder = "Money Manager";
  }

  addButton() {
    this.router.navigate(['options-modal']);
  }

  optionButtonClick(){
    // this.navParams.setNavParams({
    //   current_page: this.currentPage,
    //   id: id
    // });
    this.modalCtrl.create({
      component: OptionsModalPage,
    }).then(modal => {
      modal.present();
    });
  }
}

