import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts);
  }

  getPost(userId: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts + '?userId=' + userId);
  }

  getPostById(id: number): Observable<IPost> {
    return this.http.get<IPost>(urls.posts + '/' + id);
  }
}
