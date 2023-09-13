// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ApiService } from '../shared/api.service';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent {
  
//   user: any = {};
//   Sharedobj: any;
//   id:any="";
//   productimage:any="";
//   productname:any="";
//   productcategory:any="";
//   productprice:any="";
//   productdescription:any="";

//   constructor(public serviceobj:ApiService, public router:Router){}
//   ngOnInit():void{
//     this.Sharedobj = this.serviceobj.getSharedData()
//     console.log(this.Sharedobj);
//     this.id = this.Sharedobj.id;
//     this.productimage = this.Sharedobj.productimage;
//     this.productname= this.Sharedobj.productname;
//     this.productcategory = this.Sharedobj.productcategory;
    
//     this.productprice = this.Sharedobj.productprice;
//     this.productdescription = this.Sharedobj.productdescription;
    
//   }
//   onSubmit(addorder:any){
//     console.log(addorder.value);
//     if(addorder.valid){
//       this.serviceobj.addorder(addorder.value).subscribe(res => {
//         console.log(this.Sharedobj.id);
//         this.serviceobj.removecart(this.Sharedobj.id).subscribe(res=>{
//           alert('Order Placed Sucessfully')
//           this.router.navigate(['product']);
//         },err=>{});
//       }, err => {
//       })
//     }
//   }

  
// }

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  constructor(private router:Router,private http:HttpClient){}
  payment :any= {
    name: '',
    phoneNumber: '',
    state: '',
    city: '',
    pincode:'',
    address:''
  };

  // submitPayment() {
  //   // Handle payment submission here
  //   console.log('Payment Data:', this.payment);
  //   alert('Payment Done')
  //   this.router.navigate(['product'])
  //   // You can send this data to a payment processing service or handle it as needed.
  // }


  paymentdetails: any;

  submitPayment(data:any){
    
    console.log(data.value)
    this.http.post('http://localhost:3000/payments',data.value).subscribe((res) => {
      console.log(res);
      alert('Payment Done');
      this.router.navigate(['product'])
      
    }, err => {

    })
  }
}


