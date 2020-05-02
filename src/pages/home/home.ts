import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos:any;

  constructor(public navCtrl: NavController,
              private server: ServiceProvider, 
              public http: Http) {

                this.listarProdutos();
  }


  listarProdutos(){

    this.http.get(this.server.getUrl()+ "/listDados.php").pipe(map(res => res.json()))
    .subscribe(

      listaDados => {
        this.produtos = listaDados;

      }

    );
    
  }


}
