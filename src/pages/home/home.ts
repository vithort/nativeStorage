import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { CadastrarPage } from '../cadastrar/cadastrar';

@Component({
  selector: 'page-home'
  ,templateUrl: 'home.html'
})
export class HomePage {

  nome: string;
  sobrenome: string;
  idade: number;
  conteudo: boolean;

  constructor(
    public navCtrl: NavController
    ,private nativeStorage: NativeStorage
  ) {

  }

  ionViewDidEnter() {
    this.getStorage();
  }

  getStorage() {

    return this.nativeStorage.getItem('myItem')
    .then( data => {
      this.nome = data.nome;
      this.sobrenome = data.sobrenome;
      this.idade = data.idade;
      this.conteudo = true;
    })
    .catch(() => {
      this.conteudo = false;
      error => console.log(error);
    });
  }

  cadastrar() {
    this.navCtrl.push(CadastrarPage.name);
  }

  editar() {
    this.navCtrl.push(CadastrarPage.name, {nome: this.nome, sobrenome: this.sobrenome, idade: this.idade});
  }

  remover() {
    this.nativeStorage.remove('myItem');
    this.getStorage();
  }

}
