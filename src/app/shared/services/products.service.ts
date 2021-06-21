import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsRef: AngularFirestoreCollection<IProduct>;
  private dbPath: string = '/products';

  constructor(
    private db: AngularFirestore
  ) {
    this.productsRef = this.db.collection(this.dbPath);
  }

  getProducts(): AngularFirestoreCollection<IProduct> {
    return this.productsRef;
  }

  getProductByID(id: string): AngularFirestoreDocument<IProduct> {
    return this.productsRef.doc(id);
  }

  getCurrentProductViews(id: string) {
    return this.productsRef.doc(id).get();
  }

  updateProductViews(id: string, views: number): void {
    this.productsRef.doc(id).update({ views: views + 1 });
  }
}
