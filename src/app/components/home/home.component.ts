import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  @ViewChild(TestComponent)
  testComponent: TestComponent

  constructor() { }
  ngOnDestroy(): void {
    console.log('user component is destroy');
  }

  ngAfterViewInit(): void {
   console.log(this.testComponent.name);
  }

  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
    
  }

}
