import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/index";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  @Input() products$:Observable<AppDataState<Product[]>> | null = null;

  @Output() productsEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  // pour le html
  readonly dataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onActionEvent($event: ActionEvent){
    // on remonte l'evenement, on ne fait que transmettre
    console.log('list event : ', $event);
    this.productsEventEmitter.emit($event);
  }

}
