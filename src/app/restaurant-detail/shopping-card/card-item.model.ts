import { MenuItem } from "../menu-item/menu-item.model";

//Criar classe
export class CardItem{
    // metodo construtor.
    constructor(public menuItem: MenuItem,
         public quantity: number = 1){}

    value(): number{
        return this.menuItem.price * this.quantity
    }
}