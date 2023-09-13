import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  Url3:any=" http://localhost:3000/cart";



  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>(" http://localhost:3000/posts")
    .pipe(map((res:any) => 
    {
      return res;
    }))
  }

  postProduct(data:any){
    return this.http.post<any>(" http://localhost:3000/posts",data)
    .pipe(map((res:any) => 
    {
      return res;
    }))
  }

 

  updateProduct(data:any,id:number){
    return this.http.put<any>(" http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any) => 
    {
      return res;
    }))
  }

  deleteProduct(id:number){
    return this.http.delete<any>(" http://localhost:3000/posts/"+id)
    .pipe(map((res:any) => 
    {
      return res;
    }))
  }



  // itemCart(data:any):Observable<any>{

  //   return this.http.post<any>(this.Url3,data);

  // }

 

  // getcartdata()

  // {

  //   return this.http.get<any[]>(this.Url3);

  // }

 

  // removecart(id:any)

  // {

  //     return this.http.delete<any>(this.Url3+'/' + id);

  // }

}
