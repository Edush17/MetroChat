import { Component } from '@angular/core';
import { Metro } from '../models/metro.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-metro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-metro.component.html',
  styleUrl: './lista-metro.component.css',
})
export class ListaMetroComponent {
  listaMetro: Metro[] = [
    {
      idt: 'ASD',
      linea: 'Rossa',
      numchatting: 32,
      tempo: 125000,
    },
    {
      idt: 'AKE',
      linea: 'Verde',
      numchatting: 29,
      tempo: 145000,
    },
    {
      idt: 'BFD',
      linea: 'Gialla',
      numchatting: 47,
      tempo: 155000,
    },
  ];
}
