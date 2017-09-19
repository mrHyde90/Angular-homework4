import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	@Output() startGame: EventEmitter<{}> = new EventEmitter<{lal:number}>();
  ref;
	juegoComenzado(){
		console.log("estas dentro de juegoComenzado");
    //muy importante, no pongas function(){}, pon ()=>{}
    //cada vez que se llama a function(){} <- trata de llamar a otro this que no existe
    //en cambio ()=>{} llama siempre al mismo
		this.ref = setInterval(()=>{this.startGame.emit()}, 1000);
	}

  pausarJuego(){
    clearInterval(this.ref);
  }

  constructor() { }

  ngOnInit() {
  }

}
