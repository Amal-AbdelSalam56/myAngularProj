import { AuthGuard } from './guards/auth.guard';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { OrderParentComponent } from './components/order-parent/order-parent.component';
import { ProductsComponent } from './components/products/products.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';

const routes: Routes = [

      {path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'Product', component: ProductsComponent ,canActivate:[AuthGuard]},
      { path: 'product/:pid', component: ProdDetailsComponent },
      { path: 'Order', component: OrderParentComponent ,canActivate:[AuthGuard]},
      { path: 'Admin/Insertproduct', component: AddProductComponent },
      { path: 'Admin/Editproduct/:pid', component: AddProductComponent },
      {
        path: 'New', 
        loadChildren: () => import('src/app/components/product-module/product-module.module').then(m=> m.ProductModuleModule)
      },
   ]},
   { path: 'Login', component: UserLoginComponent },
   { path: 'Logout', component: UserLoginComponent },

  { path: 'Register', component: UserRegisterComponent },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
