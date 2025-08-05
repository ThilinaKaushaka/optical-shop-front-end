import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/OrderService';
import { OrderDetailsDto } from '../../model/order/OrderDetailsDto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-analysis-page',
  imports: [NgFor],
  templateUrl: './analysis-page.component.html',
  styleUrl: './analysis-page.component.css'
})
export class AnalysisPageComponent implements OnInit {
  constructor(private orderService:OrderService) {}
  ngOnInit(): void {
    this.loadDetails(1);
    this.loadCustomers(1);

  }

  topDetails:any[]=[];

  loadDetails(num:number):void{
    this.topDetails=[];
    this.orderService.getTopTreeSellingItems(num).subscribe(res=>{

      res.sort((a, b) => b.quantity - a.quantity);
      this.topDetails=res;
      
      
      
    });
  }
  
  topCustomers:any[]=[];

  loadCustomers(num:number):void{ 
    this.topCustomers=[];
    this.orderService.getTopCustomers(num).subscribe(res=>{
      console.log(res);
      this.topCustomers=res;
      
    });
  }

}
