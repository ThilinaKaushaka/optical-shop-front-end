import { Component } from '@angular/core';
import { ItemCrudPanelComponent } from "../item-crud-panel/item-crud-panel.component";
import { ItemService } from '../../../service/itemService';
import { ItemCategory } from '../../../util/item/ItemCategoty';
import { ItemDto } from '../../../model/item/ItemDto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-item-controll-panel',
  imports: [ItemCrudPanelComponent,NgFor],
  templateUrl: './item-controll-panel.component.html',
  styleUrl: './item-controll-panel.component.css'
})
export class ItemControllPanelComponent {
  constructor(private itemService: ItemService) { }
  

  categoryList:ItemCategory[]=Object.values(ItemCategory);
    
    selectedCategory:ItemCategory|null=null;
  
    changeSelectedCategory(category:ItemCategory):void{
      this.selectedCategory=category;
      this.loadItem(category);
    }
    
      itemList: Array<ItemDto> = [];
    
     loadItem(category:ItemCategory|null=null): void {
      switch(category){
        case ItemCategory.NONE:this.loadAllItem();break;
        case ItemCategory.LENS:this.loadLens();break;
        case ItemCategory.BOX:this.loadBox();break;
        case ItemCategory.CHAIN:this.loadChain();break;
        case ItemCategory.CONTACT_LENS:this.loadContactLens();break;
        case ItemCategory.CONTACT_LIQUID:this.loadContactLensLiquid();break;
        case ItemCategory.FRAME:this.loadFrame();break;
        case ItemCategory.LENS_CLEANER:this.loadLensCleaner();break 
        case ItemCategory.LENS_CLOTH:this.loadLensCloth();break
        case ItemCategory.NAIL:this.loadNail();break
        case ItemCategory.NOSE_PAD:this.loadNosePad();break
        default:this.loadAllItem();break;   
      }
  
  
  
      
    }
  
  
    loadAllItem():void{
      this.loadLens();
    }
  
    loadLens(): void {
      this.itemService.getAllLens().subscribe((data) => {
        this.itemList = data;
        console.log('Items loaded successfully', data);
      });
    }
  
    loadBox(): void {
      this.itemService.getAllBox().subscribe((data) => {
        this.itemList = data;
        console.log('Items loaded successfully', data);
      });
    } 
  
    loadChain(): void {
      this.itemService.getAllChain().subscribe((data) => {
        this.itemList = data;
        console.log('Items loaded successfully', data);
      });
    }
  
    loadContactLens(): void {
      this.itemService.getAllContactLens().subscribe((data) => {
        this.itemList = data;
        console.log('Items loaded successfully', data);
      });
    }
  
    loadContactLensLiquid(): void {
      this.itemService.getAllContactLensLiquid().subscribe((data)=>{
        this.itemList=data;
        console.log('Items loaded successfully',data);
      });
  
    }
    
    loadFrame(): void {
      this.itemService.getAllFrame().subscribe((data) => {
        this.itemList = data;
        console.log('Items loaded successfully', data);
      });
    }
  
    loadLensCleaner(): void {
      this.itemService.getAllLensCleaner().subscribe((data)=>{
        this.itemList=data;
        console.log('Items loaded successfully',data);
  
      });
    }
  
    loadLensCloth(): void {
      this.itemService.getAllLensCloth().subscribe((data)=>{
        this.itemList=data;
        console.log('Items loaded successfully',data);
  
      });
    }
  
    loadNail(): void {
      this.itemService.getAllNail().subscribe((data)=>{
        this.itemList=data;
        console.log('Items loaded successfully',data);
  
      });
    }
  
    loadNosePad(): void {
      this.itemService.getAllNosePad().subscribe((data)=>{
        this.itemList=data;
        console.log('Items loaded successfully',data);
  
      });
    }
}
