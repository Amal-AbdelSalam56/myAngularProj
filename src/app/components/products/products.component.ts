import { IProduct } from './../../models/iproduct';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnInit, OnChanges {

  // prodList: IProduct[];
  prdListOfCat: IProduct[] = [];
  @Input() receivedCatID: number = 0;
  orderTotalPrice: number = 0;
  // EventEmitter => generic class
  @Output() totalPriceChanged: EventEmitter<number>;
  catList: any;

  // selectedCatID: any;

  constructor(private ProductService: ProductService, private router: Router, private ProductApi: ProductApiService) {

    this.totalPriceChanged = new EventEmitter<number>();

    // this.prodList = [
    //   {
    //     ID: 1,
    //     Name: "HP",
    //     Quantity: 5,
    //     Price: 8000,
    //     Img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06596699.png",
    //     CateogryID: 1
    //   }, {
    //     ID: 2,
    //     Name: "OPPO",
    //     Quantity: 3,
    //     Price: 4000,
    //     Img: "https://m.media-amazon.com/images/I/417JK93MICL._AC_SY580_.jpg",
    //     CateogryID: 2
    //   }, {
    //     ID: 3,
    //     Name: "APPLE",
    //     Quantity: 6,
    //     Price: 6000,
    //     Img: "https://5.imimg.com/data5/SELLER/Default/2020/9/AP/CT/PN/25258109/apple-ipad-500x500.jpg",
    //     CateogryID: 3
    //   }, {
    //     ID: 4,
    //     Name: "INFINX",
    //     Quantity: 1,
    //     Price: 3000,
    //     Img: "https://assets.mspimages.in/wp-content/uploads/2022/01/DSC02798-1024x683.jpg",
    //     CateogryID: 1
    //   }, {
    //     ID: 5,
    //     Name: "LENOVO",
    //     Quantity: 4,
    //     Price: 8000,
    //     Img: "https://static.lenovo.com/ww/img/new-homepage/default/lenovo-phones-hover.jpg",
    //     CateogryID: 2
    //   }, {
    //     ID: 6,
    //     Name: "DELL",
    //     Quantity: 2,
    //     Price: 2000,
    //     Img: "https://m.media-amazon.com/images/I/718fl1GBhOL.jpg",
    //     CateogryID: 3
    //   }
    // ];

    // this.catList=[
    //   {ID:1,Name:"Laptops"},
    //   {ID:2,Name:"Mobiles"},
    //   {ID:3,Name:"Tablets"}
    // ];

  }

  ngOnChanges(): void {
    //this.getProductsOfCat();
    // this.prdListOfCat = this.ProductService.getProdOfCatID(this.receivedCatID);
    if (this.receivedCatID == 0) {
      this.ProductApi.getAllProds().subscribe(prdList => { this.prdListOfCat = prdList })
    } else {
      this.ProductApi.getProdsByCatID(this.receivedCatID).subscribe(prds => { this.prdListOfCat = prds })
    }
  }

  ngOnInit(): void {
    //  this.getProductsOfCat();       /////لما يفتح الصفحة ع طول 
    // this.prdListOfCat = this.ProductService.getProdOfCatID(this.receivedCatID);
    this.ProductApi.getAllProds().subscribe(prods => { this.prdListOfCat = prods })
  }

  //  private getProductsOfCat(){
  //   if(this.receivedCatID==0)
  //   {
  //     this.prdListOfCat=Array.from(this.prodList);
  //     return;
  //   }

  //    this.prdListOfCat= this.prodList.filter((prd)=>prd.CateogryID==this.receivedCatID);
  // }

  updatePrice(prdPrice: number, items: any) {

    this.orderTotalPrice += (prdPrice * +items);
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  openDetails(prdID: number) {
    //this.router.navigate(['product', prdID])

    // this.ProductApi.getProdsByID(prdID).subscribe({
    //   next: (user) => {
    //     this.router.navigate(['product/', prdID]);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
  }

  deleteProd(prdid:number) {
    this.ProductApi.deleteProd(prdid).subscribe(prods => {
      this.ProductApi.getAllProds().subscribe(prods => {
        this.prdListOfCat = prods
      })
    })
  }


  trackByFunc(index: number, item: IProduct) {
    return item.ID;
  }
}


