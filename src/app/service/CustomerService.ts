import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "../model/Customer";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})

export class CustomerService{
    
    constructor(private http:HttpClient){}

    searchCustomer(id:number):Observable<Customer>{
        return this.http.get<Customer>(`http://localhost:8080/customer/get-by-id?id=${id}` );
    }

    customerUpdate(customerUpate:Customer):void{
        this.http.put('http://localhost:8080/customer/update',customerUpate);
    }

    customerAdd(customerAdd:Customer):void{
        this.http.post('http://localhost:8080/customer/add',customerAdd);
    }

}