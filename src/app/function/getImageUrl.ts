import { ItemCategory } from "../util/item/ItemCategoty";

export class GetImageUrl{
    getUrl(category:ItemCategory):string{
        switch(category){
            case ItemCategory.BOX : return "image/shop image/box.jpg";
            case ItemCategory.LENS : return "image/shop image/lens.jpg";
            case ItemCategory.CHAIN : return "image/shop image/chain.jpg";
            case ItemCategory.CONTACT_LENS : return "image/shop image/contact lens.jpg";
            case ItemCategory.CONTACT_LIQUID : return "image/shop image/contact-lens-liquid(1).jpg";
            case ItemCategory.FRAME : return "image/shop image/frame.jpg";
            case ItemCategory.LENS_CLEANER : return "image/shop image/lens cleaner.jpg";
            case ItemCategory.LENS_CLOTH : return "image/shop image/lens cloth.jpg";
            case ItemCategory.NAIL : return "image/shop image/nail.jpg";
            case ItemCategory.NOSE_PAD : return "image/shop image/nose pad.jpg";
            default:
                return "";
        }
    
    }
}