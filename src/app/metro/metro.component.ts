import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Metro } from '../models/metro.model';
import { CommonModule } from '@angular/common';
import { MmssPipe } from '../pipe/mmss.pipe';

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
  oraPartenza?: number;
  attesa?: number;
  intervalId?: any;
  i: number = 0;

  ngOnInit() {
    this.oraPartenza = this.datiIn?.tempo;
    // tempo mancante alla partenza
    this.attesa = this.ora;
    console.log('attesa', this.attesa);
    this.inPartenza.emit('evento emesso');
    this.intervalId = setInterval(() => {
      this.i++;
      console.log('interval', this.i);
      if (this.i === 10) {
        clearInterval(this.intervalId);
      }
    }, 1000);

    // let x = setInterval(() => {
    //   if (this.attesa) {
    //     this.attesa = this.attesa - 1000;
    //   }
    //   if (this.attesa! <= 0) {
    //     clearInterval(x);
    //     this.inPartenza.emit('prova');
    //     // this.inPartenza.emit(this.datiIn?.idt);
    //     // this.stato = { display: 'none' };
    //   }
    // }, 1000);
  }
}
