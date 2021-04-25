import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Experience } from '../../../models/Data';
@Component({
  selector: 'prime',
  templateUrl: './prime-calc.component.html',
  styleUrls: ['./prime-calc.component.css'],
})
export class PrimeCalcComponent {
  constructor() {}

  experience: Experience[];
  @ViewChild('nPrime') nPrime: ElementRef;
  title = 'Prime Numbers Application';
  primeNumbers: number[];
  nTmp: number;
  answer: number;
  isPrime: boolean;
  dynamicPadding: number = 400;

  getN() {
    this.primeNumbers = [];
    this.nTmp = this.nPrime.nativeElement.value;

    let i, j;
    for (i = 2; i <= this.nTmp; i++) {
      this.isPrime = true;
      for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          this.isPrime = false;
          break;
        }
      }
      if (this.isPrime) {
        this.primeNumbers.push(i);
      }
    }
    if (this.primeNumbers.length > 3) {
      this.dynamicPadding = 20;
    }
    this.answer = this.primeNumbers.reduce((prev, next) => prev + next, 0);
    console.log(this.answer);
  }
}
