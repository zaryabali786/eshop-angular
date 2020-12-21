import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService :ProductsService) { }

  ngOnInit(): void {
  }
addNewProduct(form){
  
  
  let  newProduct = {
    id :form.value.productid,
categoryId:form.value.product_category,
productName:form.value.product_name,
description:form.value.product_description,
rating:form.value.product_rating,
price:form.value.product_price,
productImg:form.value.product_img,
isAvailable:1,
color:form.value.product_color,
reviews:form.value.product_reviews

     
  };
  this.productService.createProduct(newProduct).subscribe(data=>{
   console.log(data);
    });


}
}
