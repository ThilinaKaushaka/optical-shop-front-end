import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "../model/customer/Customer";
import { Observable } from "rxjs";
import { env } from "../env/env.test";
@Injectable({providedIn:"root"})

export class CustomerService{
    
    constructor(private http:HttpClient){}

    searchCustomer(id:number):Observable<Customer>{
        return this.http.get<Customer>(`${env.baseUrl}/customer/get-by-id?id=${id}` );
    }

    customerUpdate(customerUpate:Customer){
        return this.http.put(`${env.baseUrl}/customer/update`,customerUpate);
    }

    customerAdd(customerAdd:Customer){
        return this.http.post(`${env.baseUrl}/customer/add`,customerAdd);
    }

}