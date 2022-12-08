import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  searchProductByName(prdName: string) {
    throw new Error('Method not implemented.');
  }

  prodList: IProduct[];

  constructor() { 

     this.prodList = [
      {
        ID: 1,
        Name: "HP",
        Quantity: 5,
        Price: 8000,
        Img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06596699.png",
        CateogryID: 1
      }, {
        ID: 2,
        Name: "OPPO",
        Quantity: 3,
        Price: 4000,
        Img: "https://m.media-amazon.com/images/I/417JK93MICL._AC_SY580_.jpg",
        CateogryID: 2
      }, {
        ID: 3,
        Name: "APPLE",
        Quantity: 6,
        Price: 6000,
        Img: "https://5.imimg.com/data5/SELLER/Default/2020/9/AP/CT/PN/25258109/apple-ipad-500x500.jpg",
        CateogryID: 3
      }, {
        ID: 4,
        Name: "INFINX",
        Quantity: 1,
        Price: 3000,
        Img: "https://assets.mspimages.in/wp-content/uploads/2022/01/DSC02798-1024x683.jpg",
        CateogryID: 1
      }, {
        ID: 5,
        Name: "LENOVO",
        Quantity: 4,
        Price: 8000,
        Img: "https://static.lenovo.com/ww/img/new-homepage/default/lenovo-phones-hover.jpg",
        CateogryID: 2
      }, {
        ID: 6,
        Name: "DELL",
        Quantity: 2,
        Price: 2000,
        Img: "https://m.media-amazon.com/images/I/718fl1GBhOL.jpg",
        CateogryID: 3
      }
    ];


  }

getAllProd():IProduct[]{
    return this.prodList;
}

getProdOfCatID(catID:number):IProduct[]{
  if(catID==0){
    return this.getAllProd();
  }else{
    return this.prodList.filter(prod => prod.CateogryID==catID)
  }
}

getProdByID(prodID:number):IProduct|undefined{
   return this.prodList.find(prod=>prod.ID==prodID);
}

getProdIDList():number[]{

  return this.prodList.map(prod=>prod.ID);
}

getProdByName(prodName:string):IProduct|undefined{
  return this.prodList.find(prod=>prod.Name==prodName);
}

  

}
