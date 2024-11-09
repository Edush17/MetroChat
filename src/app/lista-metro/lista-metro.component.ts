import { Component } from '@angular/core';
import { Metro } from '../models/metro.model';
import { CommonModule } from '@angular/common';
import { LISTAMETRO } from '../dati/metroremoti';
import { MetroComponent } from '../metro/metro.component';
import { DettaglioMetroComponent } from '../metro/dettaglio-metro/dettaglio-metro.component';

@Component({
  selector: 'app-lista-metro',
  standalone: true,
  imports: [CommonModule, MetroComponent, DettaglioMetroComponent],
  templateUrl: './lista-metro.component.html',
  styleUrl: './lista-metro.component.css',
})
export class ListaMetroComponent {
  
  listaMetro?: Metro[];
  metroSelezionata?: Metro;
  now!: number;
  treniPartiti?: string;

  constructor(){
    this.listaMetro = []
  }

  ngOnInit(){
    this.listaMetro = LISTAMETRO;
    this.now = new Date().getTime();
  }

  setMetro(metro: Metro) {
    this.metroSelezionata = metro;
  }

  partiti(id: string) {
    this.treniPartiti += "|" + id;
  }
}
