import { ItemCategory } from "../../util/item/ItemCategoty";

export class ItemDtoView{
    id: number | null=null ;
    name: string | null=null ;
    category: ItemCategory;
    brand: string | null=null ;
    qty: number | null=null ;
    price: number | null=null ;
    description: string | null=null ;
    isDisable: boolean | null=null ;
    itemObject: any ;

    constructor(id: number | null,name: string | null,category: ItemCategory,brand: string | null,qty: number | null,price: number | null,description: string | null,isDisable: boolean | null,itemObject: any | null){
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