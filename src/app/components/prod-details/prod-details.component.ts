import { ProductApiService } from 'src/app/Services/product-api.service';
import { IProduct } from './../../models/iproduct';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {

  prod: IProduct | undefined = undefined;
  prodIDlist: number[] = [];
  currProdID: number = 0;
  currIndex: number = 0;
  cuurentIndex: any;

  constructor(private activedroute: ActivatedRoute, private router: Router, 
    private prodservice: ProductService, private location: Location ,
    private ProductApi: ProductApiService
    ) { }

  ngOnInit(): void {
    this.prodIDlist= this.prodservice.getProdIDList();


    this.activedroute.paramMap.subscribe(paramMap => {
      this.currProdID = (paramMap.get('pid'))?Number(paramMap.get('pid')):0;

    let foundprod = this.prodservice.getProdByID(this.currProdID);
      if (foundprod) {
        this.prod = foundprod;
      } else {
        alert("product not found")
        this.location.back();
      }


      //this.ProductApi.getProdsByID(this.currProdID).subscribe(prds => {this.prod= prds});
    
     })





  }

  goBack() {
    this.location.back();
  }

 
  goPrev(){
    this.cuurentIndex= this.prodIDlist.findIndex((item)=>item==this.currProdID);
    this.router.navigate(['product',this.prodIDlist[--this.cuurentIndex]])
 
   }
   goNext(){
     this.cuurentIndex= this.prodIDlist.findIndex((item)=>item==this.currProdID);
      this.router.navigate(['product',this.prodIDlist[++this.cuurentIndex]])
   }

  searchFunc(prdName:string){

    let result= this.prodservice.getProdByName(prdName);
    if(result)
    {
     this.prod=result;
    }
    else
    {
     alert("Product not found");
    }
 }
}
