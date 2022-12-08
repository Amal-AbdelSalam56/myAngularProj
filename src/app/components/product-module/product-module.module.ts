import { AuthGuard } from './../../guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';

const routes: Routes = [
  { path: 'Products', component: ProductComponent ,canActivate:[AuthGuard]},
  { path: 'Products/:pid', component: ProdDetailsComponent },
]

@NgModule({
  declarations: [
    ProductComponent,
    ProdDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   
  ]
})
export class ProductModuleModule { }
