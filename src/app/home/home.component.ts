import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { HomeService } from '../services/Home.service';
import { ChartComponent } from '../chart/app.chart';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chart = [];
  slots: Food[] = [
    {value: 'A', viewValue: '9:00-12:00'},
    {value: 'B', viewValue: '12:00-3:00'},
    {value: 'C', viewValue: '3:00-8:00'}
  ];

  @ViewChild(ChartComponent) chartComponent: ChartComponent;
 slotsAvailable: any = [];
 url: any;
 dateValue: Date;
 selectedSlot: String;

totalPrice() {
 console.log('this is child');
}
 constructor() {  }
  ngOnInit() {
  }

addEvent(event: MatDatepickerInputEvent<Date>) {
  console.log(event.value);
  this.dateValue = event.value;
  console.log('date value in home is', this.dateValue);
}

onClick(value: any) {
  console.log('selected value', value);
  this.selectedSlot = value;
}

showGraph() {
  this.chartComponent.getChartInfo(this.dateValue, this.selectedSlot);
}
  }
