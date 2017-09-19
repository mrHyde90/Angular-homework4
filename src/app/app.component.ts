import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	numeros:number[] = [];
	contador:number = 0;
	empezarConteo(){
		console.log("estas dentro");
		this.contador = this.contador + 1;
		console.log(this.contador);
		this.numeros.push(this.contador);
	}
}
