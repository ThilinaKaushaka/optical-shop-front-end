import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { OrderCardComponent } from "../order-card/order-card.component";
import { ItemDto } from '../../model/item/ItemDto';
import { NgFor } from '@angular/common';
import { ItemService } from '../../service/itemService';
import { ItemDtoView } from '../../model/item/ItemDtoView';
import { ItemDtoBuy } from '../../model/item/ItemDtoBuy';
import { AddCartItemDetailsTabComponent } from "../add-cart-item-details-tab/add-cart-item-details-tab.component";
import { OrderDto } from '../../model/order/OrderDto';
import { OrderDetailsDto } from '../../model/order/OrderDetailsDto';
import { OrderService } from '../../service/OrderService';
import { CustomerService } from '../../service/CustomerService';
import { ItemCategory } from '../../util/item/ItemCategoty';




@Component({
  selector: 'app-order-control-panel',
  imports: [OrderCardComponent, NgFor, AddCartItemDetailsTabComponent],
  templateUrl: './order-control-panel.component.html',
  styleUrl: './order-control-panel.component.css'
})
export class OrderControlPanelComponent implements OnInit {

  itemList: Array<ItemDto> = [];
  shoppingCart: Array<ItemDtoBuy> = [];

  validCustomerId: boolean = false;
  customerId:number=0;
  constructor(private itemService: ItemService, private orderService: OrderService, private customerService: CustomerService) { }

  @ViewChild('txtCusId') cusId !: ElementRef;
  cusName:string="";
  cusAddress:string="";
  cusTpNo:string="";
  cusEmail:string="";
  cusNic:string="";
  cusRegDate:string="";

  ngOnInit(): void {
    this.loadItem();
  }

  public subTotal: number = 0;

  calculateTotal(): void {
    this.shoppingCart.forEach(card => {
      if (card.item?.price != null && card.buyQty != null) {
        this.subTotal += card.item.price * card.buyQty;
      }
    })
    console.log(this.subTotal);

  }



  handleBuyItem(item: ItemDtoBuy): void {

    if (this.shoppingCart.length == 0) {
      this.shoppingCart.push(item);
    } else {
      this.shoppingCart.forEach(cart => {
        if (cart.item?.id == item.item?.id && cart.buyQty != null && item.buyQty != null) {
          cart.buyQty += item.buyQty;
        } else {
          this.shoppingCart.push(item);
        }


      });
    }

    console.log('Item added to cart:', item);
    console.log('Current cart:', this.shoppingCart);
    this.calculateTotal();

  }

  plaseOrder(): void {



    if (this.validCustomerId) {
      let order: OrderDto = new OrderDto(
        null,
        null,
        null,
        this.subTotal,
        this.customerId,
        this.getOrderDetailsArray()
      );

      console.log(order);

      this.orderService.placeOrder(order).subscribe(data => {
        console.log(data);
      });
      this.shoppingCart = [];
      this.subTotal = 0;
      this.validCustomerId = false;
      this.cusId.nativeElement.value = '';
      this.cusName= '';
      this.cusAddress= '';
      this.cusTpNo= '';
      this.cusEmail= '';
      this.cusNic = '';
      this.cusRegDate= '';
    }

  }

  getOrderDetailsArray(): OrderDetailsDto[] | null {
    let orderDetails: OrderDetailsDto[] = [];
    this.shoppingCart.forEach(cart => {
      let orderDetail: OrderDetailsDto = new OrderDetailsDto(
        null,
        cart.item?.id ?? null,
        cart.buyQty,
        cart.item?.price ?? null
      );
      orderDetails.push(orderDetail);
    });
    if (orderDetails.length > 0) {
      return orderDetails;
    }
    return null;
  }

  searchCustomer() {
    this.customerId = parseInt(this.cusId.nativeElement.value);
    console.log(this.customerId);
    
    this.customerService.searchCustomer(this.customerId).subscribe(data => {
      console.log(data);
      if (data.nic != null) {
        console.log(data.name);
        
        this.cusName= data.name;
        this.cusAddress= data.address;
        this.cusTpNo= data.tpNo;
        this.cusEmail= data.email;
        this.cusNic= data.nic;
        this.cusRegDate= data.registeredDate;
        this.validCustomerId = true;
      } else {
        this.validCustomerId = false;
      }
    })
  }

  categoryList:ItemCategory[]=Object.values(ItemCategory);
  
  selectedCategory:ItemCategory|null=null;

  changeSelectedCategory(category:ItemCategory):void{
    this.selectedCategory=category;
    this.loadItem(category);
  }

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
