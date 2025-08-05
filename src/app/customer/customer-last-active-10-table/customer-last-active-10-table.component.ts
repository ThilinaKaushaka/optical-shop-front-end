import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/CustomerService';
import { Customer } from '../../model/customer/Customer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-last-active-10-table',
  imports: [NgFor],
  templateUrl: './customer-last-active-10-table.component.html',
  styleUrl: './customer-last-active-10-table.component.css'
})
export class CustomerLastActive10TableComponent implements OnInit{
  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    this.setArray();
  }
  list:Customer[]=[];

  setArray():void{
    this.customerService.getAll().subscribe(res=>{
      this.list=res;
    });
    console.log(this.list);
  }
}
