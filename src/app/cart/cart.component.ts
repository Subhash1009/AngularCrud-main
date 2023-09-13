import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private serviceobj:ApiService){ }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/usercart')
      .subscribe(res => { this.productdetails = res; })
  }

  columnNames = ["ID", "IMAGE", "NAME", "CATEGORY", "PRICE", "DESCRIPTION","CART"];

  productdetails: any;

  
  deleteProduct(id : any){
    this.http.delete('http://localhost:3000/usercart'+'/'+id)
    .subscribe(res=>
      {
        alert("Product Deleted");
        this.ngOnInit();
      })

  }
  buyNow(data:any){
    alert('Your Order has been placed')
    this.router.navigate(['payment']);
  }
 
}





