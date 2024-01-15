import { Component, OnInit, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { ItemdataService } from '../../service/itemdata.service';
import { Item } from '../../service/itemdata.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})

export class PanelComponent implements OnInit {
  constructor(private itemService: ItemdataService, private cdr: ChangeDetectorRef) { }

  data: any = [];
  detailData: any = [];

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  responseFromChild($eventValue: Item) {
    const detail = $eventValue;
    this.detailData = detail;
  }
}
