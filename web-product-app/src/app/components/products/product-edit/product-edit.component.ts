import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../model/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId: number;
  editProductFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService:ProductsService,
    private fb:FormBuilder
  ) {
    this.productId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId)
      .subscribe(product => {
        this.editProductFormGroup = this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          available: [product.available, Validators.required],
          selected: [product.selected, Validators.required]
        })
      });
  }

  onUpdateProduct(): void {
    this.submitted = true;
    if (this.editProductFormGroup?.invalid) return;
    this.productsService.update(this.editProductFormGroup?.value)
      .subscribe(data => {
        console.log("success updating product");
    });
  }

}
