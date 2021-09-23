import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-le-calculator',
  templateUrl: './le-calculator.component.html',
  styleUrls: ['./le-calculator.component.scss'],
})
export class LeCalculatorComponent implements OnInit {
  pvu: any;
  leNeeded: any;
  dollarPrice: any;
  dollarNeeded: any;
  exhangeRatioLE: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPVUPrice();
    this.getLEPrice();
  }

  getLeNeeded(pvu): any {
    this.leNeeded = (this.exhangeRatioLE * pvu) / 0.95 + 1;
    console.log(this.leNeeded);
    return this.leNeeded;
  }

  getPVUPrice(): any {
    this.dataService.getPVUPrice().subscribe((res: any) => {
      console.log(res);
      this.dollarPrice = res.data.price;
    });
  }

  getDollarNeeded(): any {
    return (this.dollarNeeded = this.dollarPrice * this.pvu);
  }

  getLEPrice(): any {
    return this.dataService.getLEPrice().subscribe((res: any) => {
      this.exhangeRatioLE = res.price;
      console.log(this.exhangeRatioLE);
    });
  }
}
