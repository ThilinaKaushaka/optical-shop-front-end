import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OrderDto } from "../model/order/OrderDto";
import { env } from "../env/env.test";
import { Observable } from "rxjs";
import { OrderDetailsDto } from "../model/order/OrderDetailsDto";

@Injectable({providedIn:"root"})
export class OrderService{
    constructor(private http:HttpClient){}
    

    placeOrder(order:OrderDto){
        return this.http.post(`${env.baseUrl}/order/add`,order);
    }




  getOrderById(id: number): Observable<OrderDto> {
    return this.http.get<OrderDto>(`${env.baseUrl}/order/search/${id}`);
  }


  updateOrder(order: OrderDto): Observable<void> {
    return this.http.put<void>(`${env.baseUrl}/order/update`, order);
  }


  getOrdersByDate(date: Date): Observable<OrderDto[]> {
    const params = new HttpParams().set('date', this.getDate(date));
    return this.http.get<OrderDto[]>(`${env.baseUrl}/order/date`, { params });
}

  private getDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`; 
    return formattedDate;
  }



  getOrdersByDateRange(startDate: Date, endDate:Date): Observable<OrderDto[]> {
    const params = new HttpParams()
      .set('startDate', this.getDate(startDate))
      .set('endDate', this.getDate(endDate));
    return this.http.get<OrderDto[]>(`${env.baseUrl}/order/date-range`, { params });
  }

  
  getOrdersByDateAndCustomer(date: Date, customerId: number): Observable<OrderDto[]> {
    const params = new HttpParams()
      .set('date', this.getDate(date))
      .set('customerId', customerId.toString());
    return this.http.get<OrderDto[]>(`${env.baseUrl}/order/date-customer`, { params });
  }

 
  getOrdersByDateRangeAndCustomer(startDate: Date, endDate: Date, customerId: number): Observable<OrderDto[]> {
    const params = new HttpParams()
      .set('startDate', this.getDate(startDate))
      .set('endDate', this.getDate(endDate))
      .set('customerId', customerId);
    return this.http.get<OrderDto[]>(`${env.baseUrl}/order/date-range-customer`, { params });
  }

 
  getLastTenOrders(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${env.baseUrl}/order/last-ten`);
  }

  getOrdersByCustomerId(customerId: number): Observable<OrderDto[]> {
    const params = new HttpParams().set('cus', customerId.toString());
    return this.http.get<OrderDto[]>(`${env.baseUrl}/order/search-by-customer-id`, { params });
  }

  getTopTreeSellingItems(num:number):Observable<any[]>{
    return this.http.get<any[]>(`${env.baseUrl}/order/top-three-selling-item/${num}`);
  }

  getTopCustomers(num:number):Observable<any[]>{
    return this.http.get<any[]>(`${env.baseUrl}/order/top-customers/${num}`);
  }



}

