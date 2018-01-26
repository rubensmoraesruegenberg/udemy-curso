import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
//Referenciamos o Input para que possa fazer que uma propriedade possa ser importada e receber valor
@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
//Aqui a propriedade está recebendo a interface Restaurante, que obrigará a quem utilizar esse componete a passar essas propriedades da interface.
  @Input() restaurant: Restaurant
  constructor() { }

  ngOnInit() {
  }

}
