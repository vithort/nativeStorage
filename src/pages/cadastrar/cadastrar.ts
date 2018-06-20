import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-cadastrar'
  ,templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private nativeStorage: NativeStorage
  ) {

    this.nome = this.navParams.get('nome');
    this.sobrenome = this.navParams.get('sobrenome');
    this.idade = this.navParams.get('idade');
  }

  setStorage() {

    this.nativeStorage.setItem('myItem', {nome: this.nome, sobrenome: this.sobrenome, idade: this.idade})
    .then(() => {
      this.navCtrl.pop();
      console.log('Item Salvo!');
    },
    error => console.error('Error ao salvar o banco', error));
  }

}
