import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  labels: any;
  legend: ApexLegend;
  colors: string[];
};
@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: any = { // Replace 'any' with appropriate type for your chartOptions object
    chart: {},
    dataLabels: {},
    plotOptions: {},
    yaxis: {},
    xaxis: {},
    fill: {},
    title: {},
    legend: {},
    colors: [],
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    //apexcharts-pie
    this.chartOptions = {
      series: [90, 25, 20, 14, 10, 12],
      chart: {
        height: 350,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                formatter: (val:any) => {
                  return val + ' tCO2e';
                }
              },
              total: {
                show: true,
                showAlways: false,
                formatter: (w:any) => {
                  return w.globals.seriesTotals.reduce((a:any, b:any) => {
                    return a + b
                  }, 0) + ' tCO2e'
                }
              }
            }
          }
        }
      },
      colors: [
        '#37647D',
        '#CE634B',
        '#418B7C',
        '#DDBA6A',
        '#80A473',
        '#DB9B4D',
      ],
      labels: ['Goods & Services', 'Offices', 'Marketing', 'Employees', 'Travel', 'Other'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        // show: false
      },
    };
  }
}