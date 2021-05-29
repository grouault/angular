import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {Observable, of} from "rxjs/index";
import {catchError, map, startWith} from "rxjs/internal/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products$:Observable<AppDataState<Product[]>> | null = null;

  // affecter un type a une variable pour le HTML;
  readonly dataStateEnum = DataStateEnum;


  constructor(
    private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    console.log('onInit');
  }

  onGetAllProducts() {
    console.log("onGetAllProducts : loading products");
    this.products$ = this.productService.getAllProducts().pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts().pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetAvailableProducts() {
    this.products$ = this.productService.getAvailableProducts().pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onSearch(dataForm:any) {
    this.products$ = this.productService.searchProducts(dataForm.keyword).pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onSelect(p:Product) {
    this.productService.select(p).subscribe({
      next: product => {
        console.log('do-nothing')
        // TODO:
        // si all et available : ne rien faire
        // si selected : recharger la page pour selected
      }
    })
  }

  onDelete(p:Product) {

    let v = confirm('Etes vous sûr?');
    if ( v == true){
      this.productService.delete(p).subscribe({
        next: product => {
          this.onGetAllProducts();
        }
      })
    }

  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onEdit(p:Product){
    this.router.navigateByUrl(`/editProduct/${p.id}`);
  }

}
