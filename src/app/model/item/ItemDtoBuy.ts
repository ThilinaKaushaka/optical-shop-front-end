import { ItemDto } from "./ItemDto";

export class ItemDtoBuy{
    item:ItemDto | null=null;
    buyQty:number | null=null;
    constructor(item:ItemDto | null = null,buyQty:number | null=null){
        this.item=item;
        this.buyQty=buyQty
    }
}