import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private ageData = new BehaviorSubject<number>(0);

  constructor() { }

  getAgeData(): BehaviorSubject<number> {
    return this.ageData;
  }

  getAgeSnapshot(): number {
    return this.ageData.getValue();
  }

  setAgeData(value: number): void {
    this.ageData.next(value);
  }
}
