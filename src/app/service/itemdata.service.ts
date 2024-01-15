import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  title:string,
  description:string
}

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {
  private itemSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemSubject.asObservable();

  constructor() {}

  private uniquString(){
    const randomPart = Math.random().toString(36).substring(2, 9)
    const timePart = Date.now().toString(36);
    return randomPart + timePart;
  }

  public addNewItem(newItem:Item) {
    const currentItems = this.itemSubject.value;
    const updatedItems = [...currentItems, newItem];
    this.itemSubject.next(updatedItems);
  }
}
