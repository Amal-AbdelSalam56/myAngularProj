import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adsList:string[];
  constructor() {

    this.adsList=["Black Friday Offers",
    "50% Sales For First ten",
    "White Friday Offers",
    "Special Offers From Jumia"]

   }
   getSchedualeAds(timeBySecond:number):Observable<string>{

    return new Observable<string>((obsrvr)=>{
      let counter =0;
      let adsTimer=setInterval(()=>{
        obsrvr.next(this.adsList[counter]);
        counter++;

        if(counter==this.adsList.length){
          obsrvr.complete();
        }
        
        if(this.adsList[counter]==""){
          obsrvr.error("NOT fOUND ANY ADS");
        }
      },timeBySecond*1000);

      return{
        unsubscribe() {
          clearInterval(adsTimer)
          console.log("unsubscribe here");
        }
      }
    })

   }
}
