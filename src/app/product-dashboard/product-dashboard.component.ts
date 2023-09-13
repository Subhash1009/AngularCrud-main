import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ProductModel } from './product-dashboard model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit{
  formValue ! :FormGroup;
  productmodelobj : ProductModel = new ProductModel()
  productData ! : any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder : FormBuilder, private api : ApiService,private router:Router,public location: Location) {}
  

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      productimage:[''],
      productname : [''],
      productcategory : [''],
      productprice : [''],
      productdescription : [''],
    })
    this.getAllProduct();
  }
  clickAddProdut(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postProjectDetails(){
    this.productmodelobj.productimage = this.formValue.value.productimage;
    this.productmodelobj.productname = this.formValue.value.productname;
    this.productmodelobj.productcategory = this.formValue.value.productcategory;
    this.productmodelobj.productprice = this.formValue.value.productprice;
    this.productmodelobj.productdescription = this.formValue.value.productdescription;


    
    this.api.postProduct(this.productmodelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Product Added Sucessfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    },
    err=>{
      alert("Something went Wrong")
    })
  
  }
  getAllProduct(){
    this.api.getProduct()
    .subscribe(res=>{
      this.productData = res;
    })
  }
  deleteProduct(row : any){
    this.api.deleteProduct(row.id)
    .subscribe(res=>
      {
        alert("Product Deleted");
        this.getAllProduct();
      })

  }
  onEdit(row : any){

    this.showAdd = false;
    this.showUpdate = true;
    this.productmodelobj.id = row.id;
    this.formValue.controls['productimage'].setValue(row.productimage);
    this.formValue.controls['productname'].setValue(row.productname);
    this.formValue.controls['productcategory'].setValue(row.productcategory);
    this.formValue.controls['productprice'].setValue(row.productprice);
    this.formValue.controls['productdescription'].setValue(row.productdescription);
  }
  updateProjectDetails(){
    this.productmodelobj.productimage = this.formValue.value.productimage;
    this.productmodelobj.productname = this.formValue.value.productname;
    this.productmodelobj.productcategory = this.formValue.value.productcategory;
    this.productmodelobj.productprice = this.formValue.value.productprice;
    this.productmodelobj.productdescription = this.formValue.value.productdescription;

    this.api.updateProduct(this.productmodelobj,this.productmodelobj.id)
    .subscribe(res=>{
      alert("Updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();

    })
  }
  Logout() {


    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }
}
