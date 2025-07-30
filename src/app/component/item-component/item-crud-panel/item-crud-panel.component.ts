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
import { BoxDto } from '../../../model/item/items/BoxDto';
import { FrameDto } from '../../../model/item/items/FrameDto';
import { ContactLensDto } from '../../../model/item/items/ContactLensDto';
import { ChainDto } from '../../../model/item/items/ChainDto';
import { ContactLiquidDto } from '../../../model/item/items/ContactLiquidDto ';
import { LensCleanerDto } from '../../../model/item/items/LensCleanerDto';
import { LensClothDto } from '../../../model/item/items/LensClothDto';
import { NailDto } from '../../../model/item/items/NailDto';
import { NosePadDto } from '../../../model/item/items/NosePadDto';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-item-crud-panel',
    imports: [NgFor],
    templateUrl: './item-crud-panel.component.html',
    styleUrl: './item-crud-panel.component.css',
    standalone: true
})
export class ItemCrudPanelComponent implements AfterViewInit {

    constructor(private http:HttpClient,private itemService:ItemService){}


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

    disableCommonItemDetails(): void {
        this.txtName.nativeElement.disabled = true;
        this.txtPrice.nativeElement.disabled = true;
        this.txtBrand.nativeElement.disabled = true;
        this.txtQty.nativeElement.disabled = true;
        this.txtDescription.nativeElement.disabled = true;
    }

    enableCommonItemDetails(): void {
        this.txtName.nativeElement.disabled = false;
        this.txtPrice.nativeElement.disabled = false;
        this.txtBrand.nativeElement.disabled = false;
        this.txtQty.nativeElement.disabled = false;
        this.txtDescription.nativeElement.disabled = false;
    }


    disableItemId(): void {
        this.itemId.nativeElement.disabled = true;
    }

    cleanItemId(): void {
        this.itemId.nativeElement.value = '';
    }

    enableItemId(): void {
        this.itemId.nativeElement.disabled = false;
    }

    cleanCommonItemDetails(): void {
        this.txtName.nativeElement.value = '';
        this.txtPrice.nativeElement.value = '';
        this.txtBrand.nativeElement.value = '';
        this.txtQty.nativeElement.value = '';
        this.txtDescription.nativeElement.value = '';
    }

    getItemDetails():any{
        switch (this.selectItemCategiry) {
            case ItemCategory.LENS:return this.lensRef?.instance.getLensValues();
            case ItemCategory.FRAME:return this.frameRef?.instance.getFrameValues();
            case ItemCategory.CONTACT_LENS:return this.contactLensRef?.instance.getContactLensValues();
            case ItemCategory.CHAIN:return this.chainRef?.instance.getChainValue();
            case ItemCategory.BOX:return this.boxRef?.instance.getBoxValue();
            case ItemCategory.CONTACT_LIQUID:return this.contactLensLiquidRef?.instance.getContactLensLiquidValues();
            case ItemCategory.LENS_CLEANER:return this.lensCleanerRef?.instance.getLensCleanerValues();
            case ItemCategory.LENS_CLOTH:return this.lensClothRef?.instance.getLensClothValues();
            case ItemCategory.NAIL:return this.nailRef?.instance.getNailValues();
            case ItemCategory.NOSE_PAD:return this.nosePadRef?.instance.getNosePadValues();
            default:
                    console.log("illegal item category");
                    break;
        }             
    }
    
    ngAfterViewInit(): void {
        this.btnAdd.nativeElement.addEventListener('click', () => {
            console.log("add clicked");
            this.cleanItemId();
            this.cleanCommonItemDetails();

        });

        this.btnSaveAdd.nativeElement.addEventListener('click', () => {
            console.log(this.getItemDetails());
            this.itemService.saveItem(new ItemDto(
                null,
                this.txtName.nativeElement.value,
                this.selectItemCategiry,
                this.txtBrand.nativeElement.value,
                parseInt(this.txtQty.nativeElement.value),
                parseFloat(this.txtPrice.nativeElement.value),
                this.txtDescription.nativeElement.value,
                false,
                this.getItemDetails()
            )).subscribe(res=>{
                console.log("item added");
                
            });

            

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
        setTimeout(() => {
            this.frameRef?.instance.setFrameValues(itemObject as FrameDto);
        });
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
        setTimeout(() => {
            this.contactLensRef?.instance.setContactLensValue(itemObject as ContactLensDto);
        });
    }

    loadChain(itemObject:Object): void {
        this.clearItemDetailTab();
        this.chainRef = this.itemDetailsTab.createComponent(ChainComponent);
        setTimeout(() => {
            this.chainRef?.instance.setChainValue(itemObject as ChainDto);
        });
    }

    loadBox(itemObject:Object): void {
        this.clearItemDetailTab();
        this.boxRef = this.itemDetailsTab.createComponent(BoxComponent);
        setTimeout(() => {
            this.boxRef?.instance.setBoxValue(itemObject as BoxDto);
        });
    }

    loadContactLensLiquid(itemObject:Object): void {
        this.clearItemDetailTab();
        this.contactLensLiquidRef = this.itemDetailsTab.createComponent(ContactLensLiquidComponent);
        setTimeout(() => {
            this.contactLensLiquidRef?.instance.setContactLensLiquidValues(itemObject as ContactLiquidDto);
        });
    }

    loadLensCleaner(itemObject:Object): void {
        this.clearItemDetailTab();
        this.lensCleanerRef = this.itemDetailsTab.createComponent(LensCleanerComponent);
        setTimeout(() => {
            this.lensCleanerRef?.instance.setLensCleanerValues(itemObject as LensCleanerDto);
        });
    }

    loadLensCloth(itemObject:Object): void {
        this.clearItemDetailTab();
        this.lensClothRef = this.itemDetailsTab.createComponent(LensClothComponent);
        setTimeout(() => {
            this.lensClothRef?.instance.setLensClothValues(itemObject as LensClothDto);
        });
    }

    loadNail(itemObject:Object): void {
        this.clearItemDetailTab();
        this.nailRef = this.itemDetailsTab.createComponent(NailComponent);
        setTimeout(() => {
            this.nailRef?.instance.setNailValues(itemObject as NailDto);
        });
    }

    loadNosePad(itemObject:Object): void {
        this.clearItemDetailTab();
        this.nosePadRef = this.itemDetailsTab.createComponent(NosePadComponent);
        setTimeout(() => {
            this.nosePadRef?.instance.setNosePadValues(itemObject as NosePadDto);
        });
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
        this.txtDescription.nativeElement.value=item.description;
        this.disableCommonItemDetails();


        this.categoryChange(item.category,item.itemObject);
        
    }

}
