import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'; 
import {RestaurantsService} from './restaurants.services';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants:Restaurant[]
//Fazendo a injeção de dependênica da classe de serviço

  //Aqui vamos criar um array e incluir dados para simular o banco de dados.
//restaurants:Restaurant[] = [
//  {
//    id: "bread-bakery",
//    name: "Bread & Bakery",
//    category: "Bakery",
//    deliveryEstimate: "25m",
//    rating: 4.9,
//    imagePath: "assets/img/restaurants/breadbakery.png"
//  },
//  {
//    id: "burger-house",
//    name: "Burger House",
//    category: "Hamburgers",
//    deliveryEstimate: "100m",
//    rating: 3.5,
//    imagePath: "assets/img/restaurants/burgerhouse.png"
//  },
//  {
//    id: "coffee-corner",
//    name: "Coffee Corner",
//    category: "Coffee Shop",
//    deliveryEstimate: "30-40m",
//    rating: 4.8,
//    imagePath: "assets/img/restaurants/coffeecorner.png"
//  }
//]

//Faz a instancia do serviço dentro do construtor.
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    //Aqui toda vez que o component for inicializado vai ser chamado.
    //ponto ideal para Iniciar o componente.
    //E essa inicialização é que vai chamar o servipo que vai retornar os dados.
    //Esse é como era utilizado com o array
    //this.restaurants = this.restaurantsService.restaurants();
    
    //esse é utilizando o observable
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
      //Acima vamos pegar o que do método que retorna um "Observable" e através do subscrible jogar na propriedade restaurnats o json correto.

    //Para completar a injeção do serviço, precisa adicionar a classe de serviço, no provider do
    //app.modules.ts, (providers: [RestaurantsService],)
  }

}
