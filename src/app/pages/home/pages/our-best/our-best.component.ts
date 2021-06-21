import { Component, OnDestroy, OnInit } from '@angular/core';

// Interfaces
import { IProduct } from 'src/app/shared/interfaces/product.interface';

// Services
import { ProductsService } from 'src/app/shared/services/products.service';

// rxjs
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-our-best',
  templateUrl: './our-best.component.html',
  styleUrls: ['./our-best.component.scss']
})
export class OurBestComponent implements OnInit, OnDestroy {

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
        this.products = data.sort((a, b) => b.views - a.views).splice(0, 3);
      });
  }

  ngOnDestroy(): void {
    this.productsSubscribtion?.unsubscribe();
  }

}
