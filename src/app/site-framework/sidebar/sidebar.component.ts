import { Component, OnInit } from '@angular/core';
import { ViewAllProductsByCategoryComponent } from 'src/app/products/view-all-products-by-category/view-all-products-by-category.component';
import {  ProductsService} from "../../products/products.service";
import { Category } from "../category";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList:  Category ;
  constructor(private productsService :ProductsService ) { }


  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data=>{
      this.categoryList=data;
    })
  }

}
