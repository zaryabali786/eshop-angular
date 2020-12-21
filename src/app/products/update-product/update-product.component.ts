import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
productId=0;
productDetails:Product;
  constructor(private activatedRoute: ActivatedRoute,
    private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId =data.id;
      this.productService.viewProduct(this.productId).subscribe(productData=>{
        this.productDetails=productData;
      });
    });
   }
 updateProduct(form){
        
  
  
  
  const updateProduct = {
id :form.value.id,
categoryId:form.value.categoryId,
productName:form.value.productName,
description:form.value.description,
rating:form.value.product_rating,
price:form.value.product_price,
productImg:form.value.product_img,
isAvailable:1,
color:form.value.product_color,
reviews:form.value.product_reviews

     
  };
  this.productService.updateProduct(this.productId ,updateProduct).subscribe(data=>{

    
  })


  


 }




}
