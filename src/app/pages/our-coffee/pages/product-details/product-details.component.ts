import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

// Services
import { ProductsService } from 'src/app/shared/services/products.service';

// rxjs
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  currentProductID: string | null | undefined;
  product: any | undefined;

  routerSubscription: Subscription | undefined;
  productSubscription: Subscription | undefined;
  updateViewSubscription: Subscription | undefined;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.routerSubscription = this.router.events
      .subscribe(e => {
        if (e instanceof NavigationEnd) {
          this.currentProductID = this.activatedRoute.snapshot.paramMap.get('id');

          if (this.currentProductID) {
            this.productSubscription = this.productService.getProductByID(this.currentProductID)
              .get()
              .pipe(
                map(changes => ({ id: changes.id, ...changes.data() }))
              )
              .subscribe(product => {
                if (product) {
                  this.product = product;
                }
              });
          }
        }
      });
  }

  ngOnInit(): void {
    if (this.currentProductID) {
      this.updateViewSubscription = this.productService.getCurrentProductViews(this.currentProductID)
        .subscribe(data => {
          let currentViews = data.data()?.views;

          if (currentViews != undefined && this.currentProductID) {
            this.productService.updateProductViews(this.currentProductID, currentViews);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
    this.productSubscription?.unsubscribe();
    this.updateViewSubscription?.unsubscribe();
  }

}
