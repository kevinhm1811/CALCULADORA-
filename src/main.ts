import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  name = 'Angular';
  display = '0';
  primerValor: number | null = null;
  action; string

  numClick(valor) {
    if ( this.display === "0"){
      this.display = valor.toString();
    }else {
      this.display = `${this.display}${valor}`;
    }

  }

  operador(tipo) {
    this.primerValor = parseFloat( this.display);
    this.action = tipo;
    this.display = '';

  }
  reset() {
    this.display = '0';
    this.primerValor = null ;
    this.action = null ;
  }
}




bootstrapApplication(App);
