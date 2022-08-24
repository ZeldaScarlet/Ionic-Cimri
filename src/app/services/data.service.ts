import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, query , where, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Product {
  id?: string
  title?:string
  price?:number
  site_name?:string
  link?:string
  image_source?:string
  subcategory_id?:number
  model_no? : string
}

export interface Category {
  category_id?: number
  category_name?:string
}

export interface SubCategory {
  subcategory_id?: number
  subcategory_name?: string
  subcategory_category_id?: number
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore : Firestore) { }

  getProducts(){
    const productsRef = collection(this.firestore, "products");
    return collectionData(productsRef);
  }

  getProductById(id): Observable<Product>{
    const productDocRef = doc(this.firestore, 'products/${id}');
    return docData(productDocRef, {idField: 'id'}) as Observable<Product>
  }

  addProduct(product: Product) {
    const productsRef = collection(this.firestore, 'products');
    return addDoc(productsRef, product);
  }
 
  deleteProduct(product: Product) {
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocRef);
  }
 
  updateProduct(product: Product) {
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return updateDoc(productDocRef, { title: product.title, price: product.price, site_name: product.site_name, link: product.link, image_source: product.image_source, subcategory_id: product.subcategory_id });
  }

  getCategories(){
    const categoriesRef = collection(this.firestore, "category");
    return collectionData(categoriesRef);
  }

  addSubCategory(subcategory: SubCategory) {
    const subcategoryRef = collection(this.firestore, 'subcategory');
    return addDoc(subcategoryRef, subcategory);
  }
  
  getSubCategory() {
    const subcategoryRef = collection(this.firestore, 'subcategory');
    return collectionData(subcategoryRef);
  }

  async getSubCategoryById(id){
    const subcategoryRef = collection(this.firestore, 'subcategory');
    const q = query(subcategoryRef, where("subcategory_category_id", "==", id))

    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  getProductBySubId(id) {
    const productsRef = collection(this.firestore, 'products');
    const q = query(productsRef, where("subcategory_id", "==", id))
    const querySnapshot = collectionData(q);
    return querySnapshot;
  }

  getProductByModel(model) {
    const productsRef = collection(this.firestore, 'products');
    const q = query(productsRef, where("model_no", "==", model))
    const querySnapshot = collectionData(q);
    return querySnapshot;
  }
}
