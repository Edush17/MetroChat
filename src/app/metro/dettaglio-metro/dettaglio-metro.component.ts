import { Component, Input } from '@angular/core';
import { Metro } from '../../models/metro.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio-metro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettaglio-metro.component.html',
  styleUrl: './dettaglio-metro.component.css',
})
export class DettaglioMetroComponent {
  chiudi() {
    this.metro = undefined;
  }

  @Input() metro?: Metro;
}
