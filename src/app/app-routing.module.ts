import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { NewComponent } from './lazy/new/new.component';
import { TestComponent } from './lazy/test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'login',component:LoginComponent},

  {path:'signup',component:SignupComponent},

  {path:'product-dashboard',component:ProductDashboardComponent},
  
  {path:'product',component:ProductComponent},

  {path:'cart',component:CartComponent},

  {path:'payment',component:PaymentComponent},

  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  
  {path:'abc1',component:NewComponent},

  {path:'xyz' ,component:TestComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
