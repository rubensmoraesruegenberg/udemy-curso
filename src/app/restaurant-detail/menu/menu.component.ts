import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService} from '../../restaurants/restaurants.services';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
//Esse é o component principal da parte de menu, aqui ele trabalha com os dados do menu-item
@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:Observable<MenuItem[]>
  constructor(private restauntsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Aqui faz a referencia aos serviços do restaurant.services.ts
  this.menu = this.restauntsService
  .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
  addMenuItem(item:MenuItem){
    console.log(item)
  }
}
