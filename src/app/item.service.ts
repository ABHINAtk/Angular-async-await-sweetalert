import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: any[] = [
    { id: 1, name: 'Item 1',price:'$100',quantity:3},
    { id: 2, name: 'Item 2' ,price:'$80',quantity:2},
    { id: 3, name: 'Item 3',price:'$110',quantity:4},
    { id: 4, name: 'Item 4' ,price:'$180',quantity:6},
    { id: 5, name: 'Item 5',price:'$90',quantity:1},
    { id: 6, name: 'Item 6' ,price:'$70',quantity:2},
  
  ];

  getItems(): any[] {
    return this.items;
  }

  deleteItem(item: any): Promise<void> {
    return new Promise<void>((resolve) => {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        resolve();
      }
    });
  }
}

