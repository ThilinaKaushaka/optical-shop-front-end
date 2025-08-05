import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../service/OrderService';
import { toArray } from 'rxjs';
import { OrderDto } from '../../model/order/OrderDto';
import { NgFor } from '@angular/common';
import { OrderDetailsDto } from '../../model/order/OrderDetailsDto';
import { AddCartItemDetailsTabComponent } from "../../order/add-cart-item-details-tab/add-cart-item-details-tab.component";

@Component({
  selector: 'app-order-view-panel',
  imports: [NgFor, AddCartItemDetailsTabComponent],
  templateUrl: './order-view-panel.component.html',
  styleUrl: './order-view-panel.component.css'
})
export class OrderViewPanelComponent implements OnInit{
  @ViewChild('txtOrderId') ordrId !: ElementRef;
  @ViewChild('txtCusId') customerId !: ElementRef;
  @ViewChild('txtStartDate') startDate !: ElementRef;
  @ViewChild('txtEndDate') endDate !: ElementRef;

  constructor(private orderService:OrderService){}
  ngOnInit(): void {
    this.orderService.getLastTenOrders().subscribe(data=>{
      this.searchOrderArray=data;
      console.log(data);
      
    });
    
  }




  public searchOrderArray:OrderDto[]=[];






  searchOrder(isWhat:boolean){
    this.orderDetailsTable.nativeElement.style.display="none";
    this.searchOrderArray=[];
    
    
    

    if(isWhat){
      
      
      this.orderService.getOrderById(parseInt(this.ordrId.nativeElement.value)).subscribe(data=>{
    

        console.log(data);
        this.searchOrderArray.push(data);
        
      });
            
    }else{
      
      

      this.orderService.getOrdersByCustomerId(parseInt(this.customerId.nativeElement.value)).subscribe(data=>{
        console.log(data);
        this.searchOrderArray=data;
        
      });
    }
  }

  public orderDetails:OrderDetailsDto[]=[];


  setOrderDetails(details:OrderDetailsDto[]):void{
    this.orderDetailsTable.nativeElement.style.display="block";
    this.orderDetails=[];
    this.orderDetails=details;
    
    console.log(this.orderDetails);
    
  }

  @ViewChild('orderDetailsTable') orderDetailsTable !: ElementRef;
  

  search():void{
    if(this.startDate.nativeElement.value!="" && this.endDate.nativeElement.value!=""&&this.customerId.nativeElement.value==""){
      this.searchByDateRange(new Date(this.startDate.nativeElement.value),new Date(this.endDate.nativeElement.value));      
    }if (this.startDate.nativeElement.value!="" && this.endDate.nativeElement.value!=""&&this.customerId.nativeElement.value!="") {
      this.searchByDateRangeAndCustomer(this.startDate.nativeElement.value,this.endDate.nativeElement.value,this.customerId.nativeElement.value);
    }
    
  }

  searchByDateRange(startDate:Date,endDate:Date):void{
    this.orderService.getOrdersByDateRange(startDate,endDate).subscribe(data=>{
      this.searchOrderArray=data;
      console.log("searchByDateRange");
      
      console.log(data);
      
    });
  }
  
  searchByDateRangeAndCustomer(startDate:Date,endDate:Date,customerId:number):void{
    this.orderService.getOrdersByDateRangeAndCustomer(startDate,endDate,customerId).subscribe(data=>{
      this.searchOrderArray=data;
      console.log("searchByDateRangeAndCustomer");
      
      console.log(data);
      
    });
  }




}
