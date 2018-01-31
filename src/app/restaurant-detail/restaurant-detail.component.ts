import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

import {RestaurantsService} from '../restaurants/restaurants.services';
import {Restaurant} from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:Restaurant
  constructor(private restaurantsService:RestaurantsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])//snapshot é como se fosse tirar uma foto que foi tirada com os parametros no momento que foi ativada a rota.
    .subscribe(restaurant => this.restaurant = restaurant);//recebo restaurant e adiciona a propriedade restaurant local(this.restaurant)
  }

}
