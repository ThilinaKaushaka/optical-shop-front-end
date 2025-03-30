import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemCategory } from '../../../model/item/ItemCategoty';
import { NgFor } from '@angular/common';
import { FrameComponent } from '../items/frame/frame.component';


@Component({
  selector: 'app-item-crud-panel',
  imports: [NgFor,FrameComponent],
  templateUrl: './item-crud-panel.component.html',
  styleUrl: './item-crud-panel.component.css',
  standalone:true
})
export class ItemCrudPanelComponent implements AfterViewInit{
  

  @ViewChild ('btnAdd') btnAdd!:ElementRef;
  @ViewChild('btnSaveAdd') btnSaveAdd!:ElementRef;
  @ViewChild('btnUpdate') btnUpdate!:ElementRef;
  @ViewChild('btnUpdateSave') btnUpdateSave !:ElementRef;

  @ViewChild('itemDetailsTab',{read:ViewContainerRef}) itemDetailsTab!:ViewContainerRef;



  public itemCategories: ItemCategory[] = Object.values(ItemCategory);

  

  ngAfterViewInit(): void {
    this.btnAdd.nativeElement.addEventListener('click',()=>{
      
    
    });

    this.btnSaveAdd.nativeElement.addEventListener('click',()=>{
      
      
    });

    this.btnUpdate.nativeElement.addEventListener('click',()=>{
      
      
    });

    this.btnUpdateSave.nativeElement.addEventListener('click',()=>{
      
      
    });

  }

  selectItemCategiry:ItemCategory=ItemCategory.NONE;

  categoryChange(category:ItemCategory):void{
    this.selectItemCategiry=category;
    this.loadComponent(this.selectItemCategiry);
    
  }
    
  
    async loadComponent(category:ItemCategory){
    switch(category){
      case ItemCategory.FRAME:
        this.clearItemDetailTab();
        this.itemDetailsTab.createComponent(FrameComponent);
        break;

      default:   
      
    } 
    
  }
  

  clearItemDetailTab():void{
    this.itemDetailsTab.clear();
  }



}
