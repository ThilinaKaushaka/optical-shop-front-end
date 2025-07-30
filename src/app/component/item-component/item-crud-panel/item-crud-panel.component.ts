import { AfterViewInit, Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemCategory } from '../../../util/item/ItemCategoty';
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
import { ItemService } from '../../../service/itemService';
import { ItemDto } from '../../../model/item/ItemDto';
import { LensDto } from '../../../model/item/items/LensDto';



@Component({
    selector: 'app-item-crud-panel',
    imports: [NgFor],
    templateUrl: './item-crud-panel.component.html',
    styleUrl: './item-crud-panel.component.css',
    standalone: true
})
export class ItemCrudPanelComponent implements AfterViewInit {

    constructor(private itemService:ItemService){}


    @ViewChild('btnAdd') btnAdd!: ElementRef;
    @ViewChild('btnSaveAdd') btnSaveAdd!: ElementRef;
    @ViewChild('btnUpdate') btnUpdate!: ElementRef;
    @ViewChild('btnUpdateSave') btnUpdateSave !: ElementRef;
    @ViewChild('itemDetailsTab', { read: ViewContainerRef }) itemDetailsTab!: ViewContainerRef;
    @ViewChild('txtItemId ') itemId!:ElementRef;
    @ViewChild('btnSearch') btnSearch!:ElementRef;
    @ViewChild('txtName') txtName!:ElementRef;
    @ViewChild('txtPrice') txtPrice!:ElementRef;
    @ViewChild('txtBrand') txtBrand!:ElementRef;
    @ViewChild('txtQty') txtQty!:ElementRef;
    @ViewChild('txtDescription') txtDescription!:ElementRef;
    



    public itemCategories: ItemCategory[] = Object.values(ItemCategory);





    ngAfterViewInit(): void {
        this.btnAdd.nativeElement.addEventListener('click', () => {


        });

        this.btnSaveAdd.nativeElement.addEventListener('click', () => {


        });

        this.btnUpdate.nativeElement.addEventListener('click', () => {
            


        });

        this.btnUpdateSave.nativeElement.addEventListener('click', () => {


        });

        this.btnSearch.nativeElement.addEventListener('click',()=>{
            this.search();
        });

    }

    selectItemCategiry: ItemCategory = ItemCategory.NONE;

    categoryChange(category: ItemCategory,itemOb:any): void {
        if(category!=ItemCategory.NONE){
            this.selectItemCategiry = category;
            this.loadComponent(this.selectItemCategiry,itemOb);
        }else{
            this.selectItemCategiry = ItemCategory.NONE;
        }
        

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

    async loadComponent(category: ItemCategory,itemObject:Object):Promise<void> {
        switch (category) {
            case ItemCategory.FRAME: this.loadFrame(itemObject); break;
            case ItemCategory.LENS: this.loadLens(itemObject); break;
            case ItemCategory.CONTACT_LENS: this.loadContactLens(itemObject); break;
            case ItemCategory.CHAIN: this.loadChain(itemObject); break;
            case ItemCategory.BOX: this.loadBox(itemObject); break;
            case ItemCategory.CONTACT_LIQUID: this.loadContactLensLiquid(itemObject); break;
            case ItemCategory.LENS_CLEANER: this.loadLensCleaner(itemObject); break;
            case ItemCategory.LENS_CLOTH: this.loadLensCloth(itemObject); break;
            case ItemCategory.NAIL: this.loadNail(itemObject); break;
            case ItemCategory.NOSE_PAD: this.loadNosePad(itemObject); break;
            default:
                console.warn(`Unknown item category: ${category}`);
                break;
        }
    }

    loadFrame(itemObject:Object): void {
        this.clearItemDetailTab();
        this.frameRef = this.itemDetailsTab.createComponent(FrameComponent);
    }

    loadLens(itemObject:Object): void {
        this.clearItemDetailTab();
        this.lensRef = this.itemDetailsTab.createComponent(LensComponent);
        setTimeout(() => {
            this.lensRef?.instance.setLensValues(itemObject as LensDto);
        });
    }

    loadContactLens(itemObject:Object): void {
        this.clearItemDetailTab();
        this.contactLensRef = this.itemDetailsTab.createComponent(ContactLensComponent);
    }

    loadChain(itemObject:Object): void {
        this.clearItemDetailTab();
        this.chainRef = this.itemDetailsTab.createComponent(ChainComponent);
    }

    loadBox(itemObject:Object): void {
        this.clearItemDetailTab();
        this.boxRef = this.itemDetailsTab.createComponent(BoxComponent);
    }

    loadContactLensLiquid(itemObject:Object): void {
        this.clearItemDetailTab();
        this.contactLensLiquidRef = this.itemDetailsTab.createComponent(ContactLensLiquidComponent);
    }

    loadLensCleaner(itemObject:Object): void {
        this.clearItemDetailTab();
        this.lensCleanerRef = this.itemDetailsTab.createComponent(LensCleanerComponent);
    }

    loadLensCloth(itemObject:Object): void {
        this.clearItemDetailTab();
        this.lensClothRef = this.itemDetailsTab.createComponent(LensClothComponent);
    }

    loadNail(itemObject:Object): void {
        this.clearItemDetailTab();
        this.nailRef = this.itemDetailsTab.createComponent(NailComponent);
    }

    loadNosePad(itemObject:Object): void {
        this.clearItemDetailTab();
        this.nosePadRef = this.itemDetailsTab.createComponent(NosePadComponent);
    }

    clearItemDetailTab(): void {
        this.itemDetailsTab.clear();
    }


    search(){
        let itemId=this.itemId.nativeElement.value;

        this.itemService.searchById(itemId).subscribe(res=>{
            this.showItemDetails(res);
            
        });
        
    }

    showItemDetails(item:ItemDto):void{
        this.txtName.nativeElement.value=item.name;
        this.txtBrand.nativeElement.value=item.brand;
        this.txtQty.nativeElement.value=item.qty;
        this.txtPrice.nativeElement.value=item.price;


        this.categoryChange(item.category,item.itemObject);
        
    }

}
