import {Component, OnInit} from '@angular/core';
import {DataTransferService, UserService} from '../../services';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  age: number;
  users: IUser[] = [];
  name: string;

  constructor(
    private userService: UserService,
    private transferService: DataTransferService
              ) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
    this.age = this.transferService.getAgeSnapshot();
    this.transferService.getAgeData().subscribe(value => this.age = value);
  }

  getName(name: string) {
    this.name = name;
    }

}
