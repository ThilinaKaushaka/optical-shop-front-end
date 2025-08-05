import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ItemDto } from '../../model/item/ItemDto';
import { ItemCategory } from '../../util/item/ItemCategoty';
import { BoxDto } from '../../model/item/items/BoxDto';
import { ChainDto } from '../../model/item/items/ChainDto';
import { LensDto } from '../../model/item/items/LensDto';
import { ContactLiquidDto } from '../../model/item/items/ContactLiquidDto ';
import { FrameDto } from '../../model/item/items/FrameDto';
import { LensCleanerDto } from '../../model/item/items/LensCleanerDto';
import { LensClothDto } from '../../model/item/items/LensClothDto';
import { NailDto } from '../../model/item/items/NailDto';
import { NosePadDto } from '../../model/item/items/NosePadDto';
import { ContactLensDto } from '../../model/item/items/ContactLensDto';
import { ItemDtoBuy } from '../../model/item/ItemDtoBuy';
import { GetImageUrl } from '../../function/getImageUrl';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent implements OnInit,AfterViewInit{
  constructor(){}
  ngOnInit(): void {
    this.imageUrl=new GetImageUrl().getUrl(this.item?.category as ItemCategory);
    console.log(this.imageUrl);
  }

  public imageUrl ="";

  
  public quantity: number = 0;

  ngAfterViewInit(): void {
    this.printDetails();
    if(this.item!=null && this.item.qty!=null){
      this.maxQty = this.item.qty;
    }
  }
  @ViewChild('itemDetails') itemDetailsTab!: ElementRef;
  
  @Input()
  item:ItemDto | null = null;
  
  @Output()
  itemAddedToCart = new EventEmitter<ItemDtoBuy>();

  maxQty:number = 0;


  increaseQuantity(): void {
    console.log(this.imageUrl);
    
    if (this.item && this.quantity < this.maxQty) {
      this.quantity++;
    }
  }


  decreaseQuantity(): void {
    if (this.quantity > 1) { // Prevent going below 1
      this.quantity--;
    }
  }

  buyItem():void{
    const itemToBuy = new ItemDtoBuy(this.item, this.quantity);
    this.itemAddedToCart.emit(itemToBuy);
    this.maxQty-=this.quantity;
    this.quantity=0;
  }

  printDetails():void{
    
    
    switch(this.item?.category){
      case ItemCategory.BOX:this.printBox(this.item.itemObject as BoxDto);break;
      case ItemCategory.CHAIN:this.printChain(this.item.itemObject as ChainDto);break;
      case ItemCategory.CONTACT_LENS:this.printContactLensDto(this.item.itemObject as ContactLensDto);break;
      case ItemCategory.LENS:this.printLensDto(this.item.itemObject as LensDto);break;
      case ItemCategory.CONTACT_LIQUID:this.printContactLiquid(this.item.itemObject as ContactLiquidDto);break;
      case ItemCategory.FRAME:this.printFrame(this.item.itemObject as FrameDto);break;
      case ItemCategory.LENS_CLEANER:this.printLensCleaner(this.item.itemObject as LensCleanerDto);break
      case ItemCategory.LENS_CLOTH:this.printLensCloth(this.item.itemObject as LensClothDto);break
      case ItemCategory.NAIL:this.printNail(this.item.itemObject as NailDto);break
      case ItemCategory.NOSE_PAD:this.printNosePad(this.item.itemObject as NosePadDto);break
      default:break
    }
    
  }



  printBox(box:BoxDto):void{
    console.log(box.toArray);
    /**
     id: number | null = null,
             itemId: number | null = null,
             material: BoxMaterial | null = null,
             size: BoxSize | null = null,
             isLockable: boolean | null = null,
             isWaterProof: boolean | null = null
     */
    this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Box Id</b></p>
        <p>Box-${box.id}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${box.material}ml</p>
      </div>


      <div class="">
        <p><b>Size</b></p>
        <p>${box.size}</p>
      </div>
      
      <div class="">
        <p><b>Lockable</b></p>
        <p>${box.isLockable==true?"Yes":"No"}</p>
      </div>

      <div class="">
        <p><b>Water Proof</b></p>
        <p>${box.isWaterProof==true?"Yes":"No"}</p>
      </div>
    `

  }

  printChain(chain:ChainDto):void{
    console.log(chain.toArray);
    /*
    id: number | null = null,
            itemId: number | null = null,
            material: ChainMaterial | null = null,
            style: ChainStyle | null = null,
            claspType: ChainClaspType | null = null,
            length: number | null = null */

    this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Chain Id</b></p>
        <p>Box-${chain.id}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${chain.material}ml</p>
      </div>


      <div class="">
        <p><b>Style</b></p>
        <p>${chain.style}</p>
      </div>
      
      <div class="">
        <p><b>clasp Type</b></p>
        <p>${chain.claspType}</p>
      </div>

      <div class="">
        <p><b>Length</b></p>
        <p>${chain.length}cm</p>
      </div>
    `        
  }

  printContactLensDto(contactLens:ContactLensDto):void{
    console.log(contactLens.toArray);
    /*
      
       
    */

        this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>CLens Id</b></p>
        <p>Box-${contactLens.id}</p>
      </div>
      
      <div class="">
        <p><b>Type</b></p>
        <p>${contactLens.type}ml</p>
      </div>


      <div class="">
        <p><b>duration</b></p>
        <p>${contactLens.duration}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${contactLens.material}</p>
      </div>

      <div class="">
        <p><b>water Content</b></p>
        <p>${contactLens.waterContent}ml</p>
      </div>

      <div class="">
        <p><b>Base Curve</b></p>
        <p>${contactLens.baseCurve}</p>
      </div>

      <div class="">
        <p><b>Diameter</b></p>
        <p>${contactLens.diameter}</p>
      </div>

      <div class="">
        <p><b>Power</b></p>
        <p>${contactLens.power}</p>
      </div>

      <div class="">
        <p><b>Cylinder</b></p>
        <p>${contactLens.cylinder}</p>
      </div>

      <div class="">
        <p><b>Axis</b></p>
        <p>${contactLens.axis}</p>
      </div>

      <div class="">
        <p><b>Colour</b></p>
        <p>${contactLens.colour}</p>
      </div>

      <div class="">
        <p><b>UV Protection</b></p>
        <p>${contactLens.uvProtection==true?"Yes":"No"}</p>
      </div>
      
    `   


  }

  printLensDto(lens:LensDto):void{
    /*
      id: number | null = null;
          itemId: number | null = null;
          type: LensType ;
          material: LensMaterial ;
          coating: LensCoating ;
          finished:LensFinished;
          power: number | null = null;
          cylinder: number | null = null;
          axis: number | null = null;
    */
    console.log(lens);
    this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-3 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Lens Id</b></p>
        <p>LENS-${lens.id}</p>
      </div>
      
      <div class="">
        <p><b>Type</b></p>
        <p>${lens.type}</p>
      </div>


      <div class="">
        <p><b>Material</b></p>
        <p>${lens.material}</p>
      </div>
      
      <div class="">
        <p><b>Coating</b></p>
        <p>${lens.coating}</p>
      </div>


      <div class="">
        <p><b>finished</b></p>
        <p>${lens.finished}</p>
      </div>

      <div class="">
        <p><b>Power</b></p>
        <p>${lens.power}</p>
      </div>


      <div class="">
        <p><b>Cylinder</b></p>
        <p>${lens.cylinder}</p>
      </div>

      <div class="">
        <p><b>Axis</b></p>
        <p>${lens.axis}</p>
      </div>
</div>

    
    
    `;


  }

  printContactLiquid(liquid:ContactLiquidDto):void{
    /*
    id: number | null = null;
        itemId: number | null = null;
        volume: number | null = null;
        preservatives: boolean | null = null;
        type: SolutionType | null = null;
    */


        this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-2 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>LIQ Id</b></p>
        <p>LIQ-${liquid.id}</p>
      </div>
      
      <div class="">
        <p><b>Volume</b></p>
        <p>${liquid.volume}ml</p>
      </div>


      <div class="">
        <p><b>Preservatives</b></p>
        <p>${liquid.preservatives}</p>
      </div>
      
      <div class="">
        <p><b>Type</b></p>
        <p>${liquid.type}</p>
      </div>
    `
    
  }

  printFrame(frame:FrameDto):void{
    console.log(frame.toArray);
    /*id: number | null = null;
        itemId: number | null = null;
        material: FrameMaterial | null = null;
        shape: FrameShape | null = null;
        gender: FrameGender | null = null;*/

        this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-2 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Frame Id</b></p>
        <p>FRAME-${frame.id}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${frame.material}ml</p>
      </div>


      <div class="">
        <p><b>Shape</b></p>
        <p>${frame.shape}</p>
      </div>
      
      <div class="">
        <p><b>Gender</b></p>
        <p>${frame.gender}</p>
      </div>
    `    
    
  }

  printLensCleaner(lensCleaner:LensCleanerDto):void{
    console.log(lensCleaner.toArray);

    /*id: number | null = null;
        itemId: number | null = null;
        volume: number | null = null;
        type: CleanerType | null = null;
        alcoholFree: boolean | null = null;
        antiFog: boolean | null = null; */
        this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Cleaner Id</b></p>
        <p>CLEANER-${lensCleaner.id}</p>
      </div>
      
      <div class="">
        <p><b>Volume</b></p>
        <p>${lensCleaner.volume}ml</p>
      </div>


      <div class="">
        <p><b>Type</b></p>
        <p>${lensCleaner.type}</p>
      </div>
      
      <div class="">
        <p><b>Alcohol Free</b></p>
        <p>${lensCleaner.alcoholFree==true?"Yes":"No"}</p>
      </div>

      <div class="">
        <p><b>Anti Fog</b></p>
        <p>${lensCleaner.antiFog==true?"Yes":"No"}</p>
      </div>
    `
    
  }

  printLensCloth(lensCloth:LensClothDto):void{
    console.log(lensCloth.toArray);
    /*id: number | null = null,
            itemId: number | null = null,
            material: LensClothMaterial | null = null,
            size: LensClothSize | null = null,
            isAntiStatic: boolean | null = null,
            isPrinted: boolean | null = null */
        this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Cloth Id</b></p>
        <p>CLOTH-${lensCloth.id}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${lensCloth.material}</p>
      </div>


      <div class="">
        <p><b>Size</b></p>
        <p>${lensCloth.size}</p>
      </div>
      
      <div class="">
        <p><b>AntiStatic</b></p>
        <p>${lensCloth.isAntiStatic==true?"Yes":"No"}</p>
      </div>

      <div class="">
        <p><b>isPrinted</b></p>
        <p>${lensCloth.isPrinted==true?"Yes":"No"}</p>
      </div>
    `
  }

  printNail(nail:NailDto):void{
    console.log(nail.toArray);
    /*id: number | null = null,
            itemId: number | null = null,
            size: string | null = null,
            isNutAndBolt: boolean | null = null,
            material: NailMaterial | null = null,
            usages: NailUsage | null = null,
            threadType: NailThreadType | null = null */
      this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-3 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>Nail Id</b></p>
        <p>Nail-${nail.id}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${nail.material}</p>
      </div>


      <div class="">
        <p><b>Size</b></p>
        <p>${nail.size}</p>
      </div>
      
      <div class="">
        <p><b>Nut & bolt</b></p>
        <p>${nail.isNutAndBolt==true?"Yes":"No"}</p>
      </div>

      <div class="">
        <p><b>isPrinted</b></p>
        <p>${nail.usages}</p>
      </div>
      <div class="">
        <p><b>Thread Type</b></p>
        <p>${nail.threadType}</p>
      </div>
    `        
  }

  printNosePad(nosePad:NosePadDto):void{
    console.log(nosePad.toArray);
    /*
    id: number | null = null,
            itemId: number | null = null,
            material: NosePadMaterial | null = null,
            mountType: NosePadMountType | null = null,
            shape: NosePadShape | null = null
    */
      this.itemDetailsTab.nativeElement.innerHTML = `
    <div class="grid grid-rows-2 grid-cols-2 gap-4 text-[8px] leading-tight text-center">
      <div class="">
        <p><b>NPad Id</b></p>
        <p>NPAD-${nosePad.id}</p>
      </div>
      
      <div class="">
        <p><b>Material</b></p>
        <p>${nosePad.material}ml</p>
      </div>


      <div class="">
        <p><b>Mounten Type</b></p>
        <p>${nosePad.mountType}</p>
      </div>
      
      <div class="">
        <p><b>Shape</b></p>
        <p>${nosePad.shape}</p>
      </div>
    ` 
  }
}
