import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  plant = {
    le: 0,
    hours: 0,
  };

  lePerHour: any;
  lePerDay: any;
  lePerWeek: any;
  lePerMonth: any;

  pvuPerHour: any;
  pvuPerDay: any;
  pvuPerWeek: any;
  pvuPerMonth: any;

  dollarPerHour: any;
  dollarPerDay: any;
  dollarPerWeek: any;
  dollarPerMonth: any;

  pesosPerHour: any;
  pesosPerDay: any;
  pesosPerWeek: any;
  pesosPerMonth: any;

  pvuPrice: any;
  dollarPrice: any;
  leToPvuRatio: any = 150;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPVUPrice();
    this.getDollarPrice();
  }

  getLePerHour(le, hours): any {
    this.lePerHour = le / hours;
    return this.lePerHour;
  }

  getLEPerDay(): any {
    this.lePerDay = this.lePerHour * 24;
    return this.lePerDay;
  }

  getLEPerWeek(): any {
    this.lePerWeek = this.lePerDay * 7;
    return this.lePerWeek;
  }

  getLEPerMonth(): any {
    this.lePerMonth = this.lePerWeek * 4;
    return this.lePerMonth;
  }

  getPVUPerHour(): any {
    this.pvuPerHour = (this.lePerHour * 0.95) / this.leToPvuRatio;
    return this.pvuPerHour;
  }

  getPVUPerDay(): any {
    this.pvuPerDay = (this.lePerDay * 0.95) / this.leToPvuRatio;
    return this.pvuPerDay;
  }

  getPVUPerWeek(): any {
    this.pvuPerWeek = (this.lePerWeek * 0.95) / this.leToPvuRatio;
    return this.pvuPerWeek;
  }

  getPVUPerMonth(): any {
    this.pvuPerMonth = (this.lePerMonth * 0.95) / this.leToPvuRatio;
    return this.pvuPerMonth;
  }

  getPVUPrice() {
    this.dataService.getPVUPrice().subscribe((res: any) => {
      this.pvuPrice = res.data.price;
      return this.pvuPrice;
    });
  }

  getDollarPerHour() {
    this.dollarPerHour = this.getPVUPerHour() * this.pvuPrice;
    return this.dollarPerHour;
  }

  getDollarPerDay() {
    this.dollarPerDay = this.dollarPerHour * 24;
    return this.dollarPerDay;
  }

  getDollarPerWeek() {
    this.dollarPerWeek = this.dollarPerDay * 7;
    return this.dollarPerWeek;
  }

  getDollarPerMonth() {
    this.dollarPerMonth = this.dollarPerWeek * 4;
    return this.dollarPerMonth;
  }

  getDollarPrice() {
    this.dataService.getDolarPrice().subscribe(
      (res: any) => {
        this.dollarPrice = res.payload.vwap;
      },
      (error) => {
        console.log(error);
        this.dollarPrice = 20;
      }
    );
  }

  getPesosPerHour() {
    this.pesosPerHour = this.dollarPerHour * this.dollarPrice;
    return this.pesosPerHour;
  }

  getPesosPerDay() {
    this.pesosPerDay = this.dollarPerDay * this.dollarPrice;
    return this.pesosPerDay;
  }

  getPesosPerWeek() {
    this.pesosPerWeek = this.dollarPerWeek * this.dollarPrice;
    return this.pesosPerWeek;
  }

  getPesosPerMonth() {
    this.pesosPerMonth = this.dollarPerMonth * this.dollarPrice;
    return this.pesosPerMonth;
  }
}
