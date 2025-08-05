import { Component, Input, OnInit } from '@angular/core';

import { ItemDtoBuy } from '../../model/item/ItemDtoBuy';
import { GetImageUrl } from '../../function/getImageUrl';
import { ItemCategory } from '../../util/item/ItemCategoty';

@Component({
  selector: 'app-add-cart-item-details-tab',
  imports: [],
  templateUrl: './add-cart-item-details-tab.component.html',
  styleUrl: './add-cart-item-details-tab.component.css'
})
export class AddCartItemDetailsTabComponent implements OnInit {
  ngOnInit(): void {
    this.imageUrl=new GetImageUrl().getUrl(this.item?.item?.category as ItemCategory);
    console.log(this.item);
    
  }
  @Input()
  public item: ItemDtoBuy | undefined;

  public imageUrl="";

  setItem(item:ItemDtoBuy){
    this.item=item;
  }


}
