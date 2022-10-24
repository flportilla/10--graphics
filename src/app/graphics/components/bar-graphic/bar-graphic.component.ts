import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-graphic',
  templateUrl: './bar-graphic.component.html',
  styles: [
  ]
})
export class BarGraphicComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() barChartData!: ChartData;
  @Input() horizontal!: boolean;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  barChartType: ChartType = 'bar';

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'line';
    }
  }
}
