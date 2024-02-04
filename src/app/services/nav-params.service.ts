import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavParamsService {

  public navParams: any = {};

  public setNavParams(navParams : any) {
    this.navParams = navParams;
  }

  public getNavParams() {
    return this.navParams;
  }
}
