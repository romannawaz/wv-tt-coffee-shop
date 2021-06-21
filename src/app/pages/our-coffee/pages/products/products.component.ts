import { Component, OnDestroy, OnInit } from '@angular/core';

// Interfaces
import { IProduct } from 'src/app/shared/interfaces/product.interface';

// Services
import { ProductsService } from 'src/app/shared/services/products.service';

// rxjs
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  query: string = '';

  countryProviders = new Set<string>();

  products: IProduct[] = [];
  productsSubscribtion: Subscription | undefined;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsSubscribtion = this.productsService.getProducts()
      .snapshotChanges()
      .pipe(
        map(changes => changes.map(prod => ({ id: prod.payload.doc.id, ...prod.payload.doc.data() })))
      )
      .subscribe(data => {
        this.products = data.sort((a, b) => b.views - a.views);

        this.products.forEach(element => {
          if (this.countryProviders.size >= 3)
            return;

          this.countryProviders.add(element.country);
        });
      });
  }

  ngOnDestroy(): void {
    this.productsSubscribtion?.unsubscribe();
  }

  filter(country: string): void {
    this.query = country;
  }

}
