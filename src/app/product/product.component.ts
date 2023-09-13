import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts')
      .subscribe(res => { this.productdetails = res; })
  }

  columnNames = ["ID", "IMAGE", "NAME", "CATEGORY", "PRICE", "DESCRIPTION","CART"];

  productdetails: any;

  Addtocart(data:any){
    
    console.log(data)
    this.http.post('http://localhost:3000/usercart',data).subscribe(res => {
      console.log(res);
      alert('Items Added Sucessfully');
      
    }, err => {

    })
  }
}









