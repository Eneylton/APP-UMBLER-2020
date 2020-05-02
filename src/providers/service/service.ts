
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';


@Injectable()
export class ServiceProvider {

  basepath = "/php";

  constructor(public http: Http, private platform: Platform) {
    if(this.platform.is("cordova")){
      this.basepath = "http://enecrud-com.umbler.net";
    }
  }
  getUrl(){

    return this.basepath;

  }

}
