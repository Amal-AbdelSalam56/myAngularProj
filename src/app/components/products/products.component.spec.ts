import { ProductService } from './../../Services/product.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service:ProductService  ////متغير من نوع السيرفيس
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers:[ProductService]      /////نزود السيرفيس اللى حنستخدمها
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductService)  ///////شايل  السيرفيس عشان اشوف اللى جواها
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProdOfCatID() from ProductService inside ngOnInit()', () => {
     
    spyOn(service , "getProdOfCatID")  ////اعمل سباى ع الفانكشن

    component.ngOnInit();    ////اشغل الكومبوننت

    expect(service.getProdOfCatID).toHaveBeenCalled()   /////Done 
    expect(service.getProdOfCatID).toHaveBeenCalledTimes(1)   /////Done 

  });


  it('should call getProdOfCatID() from ProductService inside ngOnChanges()', () => {
     
    spyOn(service , "getProdOfCatID")  

    component.ngOnChanges();    

    expect(service.getProdOfCatID).toHaveBeenCalled()  
    expect(service.getProdOfCatID).toHaveBeenCalledTimes(1)  

  });

  
});
