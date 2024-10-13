import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  linkMenu1?: string;
  linkMenu2?: string;
  linkMenu3?: string;

  constructor(){
    this.linkMenu1 = 'Treni'
    this.linkMenu2 = 'Preferiti'
    this.linkMenu3 = 'Login'
  }
}
