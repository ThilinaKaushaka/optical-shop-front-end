import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItemDto } from "../model/item/ItemDto";
import { env } from "../env/env.test";


@Injectable({providedIn:"root"})
export class ItemService{

    constructor(private http:HttpClient){}

    searchById(id:string):Observable<ItemDto>{
        return this.http.get<ItemDto>(`${env.baseUrl}/item/search-by-id?id=${id}`); 
    }

    saveItem(item:ItemDto):Observable<ItemDto>{
        console.log(item);
        return this.http.post<ItemDto>(`${env.baseUrl}/item/add`,item);
    }

    getAllLens(): Observable<ItemDto[]> {

        
        return this.http.get<ItemDto[]>(`${env.baseUrl}/item/get-lens`);
    }
}