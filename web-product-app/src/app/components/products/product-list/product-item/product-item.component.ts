import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() product?:Product;

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p:Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCTS, payload: p});
  }

  onEdit(p:Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCTS, payload: p});
  }

  onDelete(p:Product){
    this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCTS, payload: p});
  }


}
