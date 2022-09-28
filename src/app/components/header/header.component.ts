import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataTransferService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string;
  isAdmin: boolean = true;

  constructor(
    private transferService: DataTransferService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.transferService.currentUserSubject.subscribe(value => {
      if(value) {
        this.email = value.email;
        this.isAdmin = value.is_staff;
      }
    });
  }

  toAdmin(): void {
      this.router.navigate(['admin']);
    }

}
