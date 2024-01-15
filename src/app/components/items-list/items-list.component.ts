import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemdataService, Item } from '../../service/itemdata.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit {
  items$: Observable<Item[]> = new Observable<Item[]>();
  itemData : Item [] = [];
  constructor(private itemdataService: ItemdataService) { }

  ngOnInit(): void {
    this.items$ = this.itemdataService.items$;
    this.items$.subscribe(items => {
      this.itemData = items;
    })
  }
}
