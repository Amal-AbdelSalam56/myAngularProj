import { CategoryApiService } from './../../../Services/category-api.service';
import { IProduct } from './../../../models/iproduct';
import { ICategory } from './../../../models/icategory';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

   catList:ICategory[]=[];
  newPrd:IProduct = {} as IProduct;
  constructor(private prodApi:ProductApiService,private categoryApi: CategoryApiService ,private router:Router) { 

  ////get Category from api
     this.categoryApi.getAllCategory().subscribe(cats => { this.catList = cats })

  }
  ngOnInit(): void {
  }


  AddNewPrd(){
    this.prodApi.addNewProd(this.newPrd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/Product']);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
