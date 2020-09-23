import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  changes = 0;

  constructor() { }

  incrementChanges(){
    ++this.changes;
    console.log('increment changes fired! Chanegs: ', this.changes)
  }
}
