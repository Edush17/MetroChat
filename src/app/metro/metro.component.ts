import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Metro } from '../models/metro.model';
import { CommonModule } from '@angular/common';
import { MmssPipe } from "../pipe/mmss.pipe";

@Component({
  selector: 'app-metro',
  standalone: true,
  imports: [CommonModule, MmssPipe],
  templateUrl: './metro.component.html',
  styleUrl: './metro.component.css',
})
export class MetroComponent {
  @Input() datiIn?: Metro;
  @Input() ora?: number;
  @Output() inPartenza = new EventEmitter<string>();
  stato?: Object;
  orapartenza?: number;
  attesa?: number;

  ngOnInit(){
    this.orapartenza = this.datiIn?.tempo;
    // tempo mancante alla partenza
    this.attesa = this.orapartenza! - this.ora!;
    let x = setInterval(()=>{
      this.attesa! -= 1000;
      if (this.attesa! <= 0){
        clearInterval(x)
        this.inPartenza.emit(this.datiIn?.idt)
        this.stato = {'display':'none'}
      }

    }, 1000)
  }
}
