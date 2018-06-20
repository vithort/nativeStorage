import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BancoProvider } from '../providers/banco/banco';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(
    platform: Platform
    ,statusBar: StatusBar
    ,splashScreen: SplashScreen
    ,bancoProvider: BancoProvider
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      bancoProvider.buscarBanco()
      .then(() => {
        this.openHome(splashScreen);
      })
      .catch(() => {
        this.openHome(splashScreen);
        //aqui pode colocar mensagem de erro ou enviar pra outra pagina
      })
    });
  }

  private openHome(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
  }
}

