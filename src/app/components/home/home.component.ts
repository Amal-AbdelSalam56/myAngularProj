import { PromotionAdsService } from './../../Services/promotion-ads.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {

  
  store:Store={
    name: "Jomia",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uKAFJtCptqbVWIg0uhbX-mKQ6LCkz0cOqgplxmLhUD2bxb4koZjT7mVWF1Bae-oG_k0&usqp=CAU",
    branches:["ALEX","CAIRO","LUXOR"]
  }

  private observ!:Subscription;
  
  constructor(private promoAds:PromotionAdsService) { }

  
  ngOnInit(): void {

    this.observ=this.promoAds.getSchedualeAds(2).subscribe({
      next:(data:string)=>{
        // console.log(data);
        alert(data)
      },
      error:(err:string)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("the end of ads");
      }
    })

  }


  ngOnDestroy(): void {     ///لما اروح كومبوننت تانى
    this.observ.unsubscribe()
  }





}
