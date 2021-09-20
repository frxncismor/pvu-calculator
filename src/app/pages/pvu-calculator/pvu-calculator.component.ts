import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pvu-calculator',
  templateUrl: './pvu-calculator.component.html',
  styleUrls: ['./pvu-calculator.component.scss'],
})
export class PvuCalculatorComponent implements OnInit {
  le: any;
  pvu: any;

  constructor() {}

  ngOnInit(): void {}

  getPVU(le): any {
    this.pvu = (le * 0.95) / 150;
    return this.pvu;
  }
}
