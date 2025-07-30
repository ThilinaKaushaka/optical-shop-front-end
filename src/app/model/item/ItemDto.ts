import { ItemCategory } from "../../util/item/ItemCategoty";

export class ItemDto{
    id: number | null=null ;
    name: string | null=null ;
    category: ItemCategory;
    brand: string | null=null ;
    qty: number | null=null ;
    price: number | null=null ;
    description: string | null=null ;
    isDisable: boolean | null=null ;
    itemObject: any ;

    constructor(id: number,name: string,category: ItemCategory,brand: string,qty: number,price: number,description: string,isDisable: boolean,itemObject: any){
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.qty = qty;
        this.price = price;
        this.description = description;
        this.isDisable = isDisable;
        this.itemObject = itemObject;
    }
}