import { Component, OnInit } from '@angular/core';
import { OrderCardComponent } from "../order-card/order-card.component";
import { ItemDto } from '../../model/item/ItemDto';
import { NgFor } from '@angular/common';
import { ItemService } from '../../service/itemService';
import { ItemDtoView } from '../../model/item/ItemDtoView';
import { ItemDtoBuy } from '../../model/item/ItemDtoBuy';

@Component({
  selector: 'app-order-control-panel',
  imports: [OrderCardComponent,NgFor],
  templateUrl: './order-control-panel.component.html',
  styleUrl: './order-control-panel.component.css'
})
export class OrderControlPanelComponent implements OnInit {
  
  itemList: Array<ItemDto> = [];
  shoppingCart: Array<ItemDtoBuy> = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItem();
  }

  loadItem():void{
    this.itemService.getAllLens().subscribe((data) => {
        this.itemList = data;
        console.log('Items loaded successfully', data);
      });
  }

  handleBuyItem(item: ItemDtoBuy): void {
    this.shoppingCart.push(item);
    console.log('Item added to cart:', item);
    console.log('Current cart:', this.shoppingCart);
    // You can add more logic here, like updating a backend service or showing a notification.
  }

}
