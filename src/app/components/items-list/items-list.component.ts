import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemdataService, Item } from '../../service/itemdata.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit { 
  @Output() sendToParent = new EventEmitter();
  items$: Observable<Item[]> = new Observable<Item[]>();
  itemData : Item [] = [];
  detailData : Item[] = [];
  constructor(private itemdataService: ItemdataService) { }

  ngOnInit(): void {
    this.items$ = this.itemdataService.items$;
    this.items$.subscribe(items => {
      this.itemData = items;
    })
  }

  clickItem(id:string){
    this.detailData = this.itemData.filter((item:any)=>{
      return item._id === id.trim();
    })
    this.sendToParent.emit(this.detailData);
  }
}
