import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddInstances = [];
  evenInstances = [];
  Instances = [];

  onIntervalFired(event){

    this.Instances.push(event)

    event % 2 !== 0 ?
      this.oddInstances.push(event)
    :
      this.evenInstances.push(event)
    ;

  }
}
