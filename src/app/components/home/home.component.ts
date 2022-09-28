import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {


  constructor() { }
  ngOnDestroy(): void {
    console.log('user component is destroy');
  }

  ngAfterViewInit(): void {
   console.log();
  }

  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
    
  }

}
