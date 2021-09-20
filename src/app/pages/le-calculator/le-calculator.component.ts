import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-calculator',
  templateUrl: './le-calculator.component.html',
  styleUrls: ['./le-calculator.component.scss'],
})
export class LeCalculatorComponent implements OnInit {
  pvu: any;
  leNeeded: any;
  constructor() {}

  ngOnInit(): void {}

  getLeNeeded(pvu): any {
    this.leNeeded = (150 * pvu) / 0.95 + 1;
    console.log(this.leNeeded);
    return this.leNeeded;
  }
}
