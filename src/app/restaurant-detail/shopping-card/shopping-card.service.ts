import { CardItem } from "./card-item.model"
import { MenuItem } from "../menu-item/menu-item.model";

//Criar classe
export class ShoppingCardService {
    //lista de itens
    items: CardItem[] = []

    //método de limpar que vai ser utizado pelo o botão.
    clear(){
        this.items = []
    }
    
    addItem(item:MenuItem){
        let foundItem = this.items.find((nItem) => nItem.menuItem.id === item.id)

        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.items.push(new CardItem(item))
        }
    }
    removeItem(item:CardItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number{
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0);
    }
}