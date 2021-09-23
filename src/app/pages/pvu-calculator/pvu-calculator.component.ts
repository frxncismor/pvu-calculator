import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-pvu-calculator',
  templateUrl: './pvu-calculator.component.html',
  styleUrls: ['./pvu-calculator.component.scss'],
})
export class PvuCalculatorComponent implements OnInit {
  le: any;
  pvu: any;
  dollarPrice: any;
  pvuToDollar: any;
  exhangeRatioLE: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPVUPrice();
    this.getLEPrice();
  }

  getPVU(le): any {
    this.pvu = (le * 0.95) / this.exhangeRatioLE;
    return this.pvu;
  }

  getPVUPrice(): any {
    this.dataService.getPVUPrice().subscribe((res: any) => {
      console.log(res);
      this.dollarPrice = res.data.price;
    });
  }

  getDollars(): any {
    return (this.pvuToDollar = this.dollarPrice * this.pvu);
  }

  getLEPrice(): any {
    return this.dataService.getLEPrice().subscribe((res: any) => {
      this.exhangeRatioLE = res.price;
      console.log(this.exhangeRatioLE);
    });
  }
}
