import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//EventEmitter, Output são para criar um evento personalizado, para disparar e carregar o menu item.
//Toda vez que trabalhar com uma propriedade deve se utilizar o Input
import { MenuItem} from "./menu-item.model"; 
//Acima importandol a propriedade

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
 //Chamando a propriedade MenuItem
  @Input() menuItem: MenuItem
  //Criar propriedade de saída
  @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  //Criar o método (emitAddEvent) que vai ser chamado no menu-item.component.html
  emitAddEvent(){
    //o parent vai receber esse evento com a propriedade menuItem
    this.add.emit(this.menuItem)
  }

}
