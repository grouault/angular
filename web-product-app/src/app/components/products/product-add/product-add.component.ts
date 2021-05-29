import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../model/product.model";
import {invalid} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  addProductFormGroup?:FormGroup;
  submitted:boolean = false;


  constructor(private fb:FormBuilder, private productsService:ProductsService) { }

  ngOnInit(): void {
    // création d'un groupe de contrôle
    this.addProductFormGroup=this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSaveProduct() {
    this.submitted = true;
    if (this.addProductFormGroup?.invalid) return;
    this.productsService
      .save(this.addProductFormGroup?.value)
      .subscribe(data => {
        console.log("success saving product");
      });
  }


}
