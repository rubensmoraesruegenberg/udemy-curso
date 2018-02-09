import {Routes} from "@angular/router" 
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import { AboutComponent } from "./about/about.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
//Toda vez que se exporta uma coisa tem que importar o componente.

//Quando o modúlo de roteamento encontrar as url definidas no path, vai emcaminhar para o component específico
export const ROUTES: Routes = [
    {path:'', component:HomeComponent},
    {path:'restaurants', component:RestaurantsComponent},
    {path:'restaurants/:id', component:RestaurantDetailComponent,
    children:[ //Rotas filhas
        {path:'', redirectTo:'menu', pathMatch:'full'},//Na primeira vez que carregar não vai ter a rota correta Ex:(restaurant/menu ou restaurant/reviews) e então deixamos como padrão para carregar o menu.
        {path:'menu', component:MenuComponent},
        {path:'reviews', component:ReviewsComponent}
    ]
    },
    {path:'about',component:AboutComponent}
]