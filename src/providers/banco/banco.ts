import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class BancoProvider {

  constructor(private nativeStorage: NativeStorage) {

  }

  buscarBanco() {

    return this.nativeStorage.getItem('myItem')
    .then(() => {
      console.log('Banco carregado com sucesso!');
    },
    error => console.error(error));

  }

}
