import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { OrderParentComponent } from './components/order-parent/order-parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component'

@NgModule({
  declarations: [
      AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    HomeComponent,
    OrderParentComponent,
    ErrorPageComponent,
    MainLayoutComponent,
    ProdDetailsComponent,
    AddProductComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
