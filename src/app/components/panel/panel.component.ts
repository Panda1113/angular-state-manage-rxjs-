import { Component, OnInit, OnChanges } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ItemdataService } from '../../service/itemdata.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})

export class PanelComponent implements OnInit {
  constructor(private itemService: ItemdataService) { }

  data: any = [];

  ngOnInit(): void {

  }

  OnChanges() {
    console.log("aaaaaa")
  }
}
