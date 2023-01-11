import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Iproduct} from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  getProduct():Observable<Iproduct>
  {
   return this.http.get<Iproduct>("https://localhost:44352/api/Product/all");
  }

  AddProduct(data:any)
  {
    console.log(data);
    return this.http.post<Iproduct>("https://localhost:44352/api/Product/add",data);
  }

  DeleteProduct(Id :any)
  {
    console.log(Id);
    return this.http.get('https://localhost:44352/api/Product/delete/'+Id);
  }
}
