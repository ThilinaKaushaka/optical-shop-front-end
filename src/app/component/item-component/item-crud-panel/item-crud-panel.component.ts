import { AfterViewInit, Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemCategory } from '../../../model/item/ItemCategoty';
import { NgFor } from '@angular/common';
import { FrameComponent } from '../items/frame/frame.component';
import { LensComponent } from '../items/lens/lens.component';
import { ContactLensComponent } from '../items/contact-lens/contact-lens.component';
import { ChainComponent } from '../items/chain/chain.component';
import { BoxComponent } from '../items/box/box.component';
import { ContactLensLiquidComponent } from '../items/contact-lens-liquid/contact-lens-liquid.component';
import { LensCleanerComponent } from '../items/lens-cleaner/lens-cleaner.component';
import { LensClothComponent } from '../items/lens-cloth/lens-cloth.component';
import { NailComponent } from '../items/nail/nail.component';
import { NosePadComponent } from '../items/nose-pad/nose-pad.component';



@Component({
  selector: 'app-item-crud-panel',
  imports: [NgFor,FrameComponent,LensComponent],
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
      console.log(this.frameRef?.instance.selectedMaterial);
        
      
    });

    this.btnUpdateSave.nativeElement.addEventListener('click',()=>{
      
      
    });

  }

  selectItemCategiry:ItemCategory=ItemCategory.NONE;

  categoryChange(category:ItemCategory):void{
    this.selectItemCategiry=category;
    this.loadComponent(this.selectItemCategiry);
    
  }
  

  private frameRef?: ComponentRef<FrameComponent>;
private lensRef?: ComponentRef<LensComponent>;
private contactLensRef?: ComponentRef<ContactLensComponent>;
private chainRef?: ComponentRef<ChainComponent>;
private boxRef?: ComponentRef<BoxComponent>;
private contactLensLiquidRef?: ComponentRef<ContactLensLiquidComponent>;
private lensCleanerRef?: ComponentRef<LensCleanerComponent>;
private lensClothRef?: ComponentRef<LensClothComponent>;
private nailRef?: ComponentRef<NailComponent>;
private nosePadRef?: ComponentRef<NosePadComponent>;

async loadComponent(category: ItemCategory) {
    switch(category) {
        case ItemCategory.FRAME: this.loadFrame(); break;
        case ItemCategory.LENS: this.loadLens(); break;
        case ItemCategory.CONTACT_LENS: this.loadContactLens(); break;
        case ItemCategory.CHAIN: this.loadChain(); break;
        case ItemCategory.BOX: this.loadBox(); break;
        case ItemCategory.CONTACT_LIQUID: this.loadContactLensLiquid(); break;
        case ItemCategory.LENS_CLEANER: this.loadLensCleaner(); break;
        case ItemCategory.LENS_CLOTH: this.loadLensCloth(); break;
        case ItemCategory.NAIL: this.loadNail(); break;
        case ItemCategory.NOSE_PAD: this.loadNosePad(); break;
        default: 
            console.warn(`Unknown item category: ${category}`);
            break;
    } 
}

loadFrame(): void {
    this.clearItemDetailTab();
    this.frameRef = this.itemDetailsTab.createComponent(FrameComponent);
}

loadLens(): void {
    this.clearItemDetailTab();
    this.lensRef = this.itemDetailsTab.createComponent(LensComponent);      
}

loadContactLens(): void {
    this.clearItemDetailTab();
    this.contactLensRef = this.itemDetailsTab.createComponent(ContactLensComponent); 
}

loadChain(): void {
    this.clearItemDetailTab();
    this.chainRef = this.itemDetailsTab.createComponent(ChainComponent);
}

loadBox(): void {
    this.clearItemDetailTab();
    this.boxRef = this.itemDetailsTab.createComponent(BoxComponent);
}

loadContactLensLiquid(): void {
    this.clearItemDetailTab();
    this.contactLensLiquidRef = this.itemDetailsTab.createComponent(ContactLensLiquidComponent);
}

loadLensCleaner(): void {
    this.clearItemDetailTab();
    this.lensCleanerRef = this.itemDetailsTab.createComponent(LensCleanerComponent);
}

loadLensCloth(): void {
    this.clearItemDetailTab();
    this.lensClothRef = this.itemDetailsTab.createComponent(LensClothComponent);
}

loadNail(): void {
    this.clearItemDetailTab();
    this.nailRef = this.itemDetailsTab.createComponent(NailComponent);
}

loadNosePad(): void {
    this.clearItemDetailTab();
    this.nosePadRef = this.itemDetailsTab.createComponent(NosePadComponent);
}

clearItemDetailTab(): void {
    this.itemDetailsTab.clear();
}



}
