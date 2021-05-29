
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/index";
import {Product} from "../model/product.model";

@Injectable({providedIn:"root"})
export class ProductsService{

  private headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  // injection du httpClient
  constructor(private http:HttpClient) {
  }

  getAllProducts():Observable<Product[]> {
    let host = (Math.random() > 0.2) ? environment.host : environment.unreachableHost;
    console.log('host = ', host);
    return this.http.get<Product[]>(`${host}/api/products`, {headers: this.headers});
  }

  getSelectedProducts():Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(`${host}/api/products?selected=true`);
  }

  getAvailableProducts():Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(`${host}/api/products?available=true`);
  }

  searchProducts(keyword:string):Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(`${host}/api/products?name_like=${keyword}`);
  }

  select(p:Product):Observable<Product> {
    let host = environment.host;
    p.selected = !p.selected;
    return this.http.put<Product>(`${host}/api/products/${p.id}`, p);
  }

  delete(p:Product):Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(`${host}/api/products/${p.id}`);
  }

  save(p:Product):Observable<Product> {
    console.log('service save');
    let host = environment.host;
    return this.http.post<Product>(`${host}/api/products`, p);
  }

  getProduct(id:number):Observable<Product> {
    let host = environment.host;
    return this.http.get<Product>(`${host}/api/products/${id}`);
  }

  update(p:Product):Observable<Product> {
    console.log('update');
    let host = environment.host;
    return this.http.put<Product>(`${host}/api/products/${p.id}`, p);
  }

}
