import { Component, OnInit } from '@angular/core';
import { ItemdataService } from '../../service/itemdata.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.scss',
})
export class AddItemsComponent implements OnInit {
  newItem = { title: '', description: '' };
  constructor(private itemDataService: ItemdataService) { }

  ngOnInit(): void {

  }

  initializeData() {
    this.newItem = { title: '', description: '' }
  }

  handleClickAddNewItems() {
    this.itemDataService.addNewItem(this.newItem);
    this.initializeData();
  }
}
