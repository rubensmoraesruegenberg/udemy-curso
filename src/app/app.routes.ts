import {Routes} from "@angular/router" 
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
//Toda vez que se exporta uma coisa tem que importar o componente.

//Quando o modúlo de roteamento encontrar as url definidas no path, vai emcaminhar para o component específico
export const ROUTES: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent}
]