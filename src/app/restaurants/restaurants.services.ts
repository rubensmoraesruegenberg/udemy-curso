//Importando o decorato injectable
import {Injectable} from "@angular/core"
//importar o serviço http do angular
import {Http} from "@angular/http"
import {Restaurant} from "./restaurant/restaurant.model"
import {MEAT_API} from "../app.api"

import {Observable} from "rxjs/Observable"
//Esse import sé responsavl por ajudar a mapear a resposta do serviço, para pegar só o json dessa resposta
import "rxjs/add/operator/map"

//para uma classe de serviço receber uma outra de serviço, precisamos marcar ela como "decorator @injectable" 
//isso é só para quando a classe for recerber um serviço por "http"

@Injectable()

//Criar classe de serviços, ela é a que fica mais próxima do backend.
export class RestaurantsService{
//Chamar os restaurants da api.


    //essa propriedade simula como se fosse o banco.
    //rests:Restaurant[] = [
    //    {
    //      id: "bread-bakery",
    //      name: "Bread & Bakery",
    //      category: "Bakery",
    //      deliveryEstimate: "25m",
    //      rating: 4.9,
    //      imagePath: "assets/img/restaurants/breadbakery.png"
    //    },
    //    {
    //      id: "burger-house",
    //      name: "Burger House",
    //      category: "Hamburgers",
    //      deliveryEstimate: "100m",
    //      rating: 3.5,
    //      imagePath: "assets/img/restaurants/burgerhouse.png"
    //    },
    //    {
    //      id: "coffee-corner",
    //      name: "Coffee Corner",
    //      category: "Coffee Shop",
    //      deliveryEstimate: "30-40m",
    //      rating: 4.8,
    //      imagePath: "assets/img/restaurants/coffeecorner.png"
    //    }
    //  ]

    //Receber injeção do serviço http
    constructor(private http:Http){}
    //A maneira abaixo é como fazia quando estava sendo feito direto pelo o array
    //restaurants(): Restaurant[]{
      //return this.rests;
    //}
      //Consumindo o serviço via http
      // utilizando o Observale, tem que importar
      restaurants(): Observable<Restaurant[]>{
      //`${MEAT_API}/` essa é uma sintaxe do tipo "Template Sring"
      return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
      }
         
    
}