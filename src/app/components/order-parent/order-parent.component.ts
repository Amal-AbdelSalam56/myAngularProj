import { ProductApiService } from 'src/app/Services/product-api.service';
import { CategoryApiService } from './../../Services/category-api.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from './../../models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent implements OnInit, AfterViewInit {
  catList: ICategory[] = [];
 //  catList: ICategory[];
  selectedCatID: number = 0;
  receivedOrderTotalPrice: number = 0;

  @ViewChild('userName') user!: ElementRef;
  @ViewChild(ProductsComponent) prductCom!: ProductsComponent;
  constructor(private categoryApi: CategoryApiService , private ProductApi: ProductApiService ) {
    // this.catList=[
    //     {ID:1,Name:"Laptops"},
    //     {ID:2,Name:"Mobiles"},
    //     {ID:3,Name:"Tablets"}
    //   ];
     this.categoryApi.getAllCategory().subscribe(cats => { this.catList = cats })

  }


  ngOnInit() {

   // this.categoryApi.getAllCategory().subscribe(cats => { this.catList = cats })

  }

  ngAfterViewInit() {
    // if(this.user)
    // this.user.nativeElement.value="Value From ts";
    // console.log(this.prductCom.prdListOfCat);

  }

  totalPriceFunc(totalPrice: number) {

    this.receivedOrderTotalPrice = totalPrice;

  }

  getArray() {
    
    console.log(this.prductCom.prdListOfCat);

  }
}
