import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { urls } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(urls.users);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(urls.users + '/' + id);
  }
}
