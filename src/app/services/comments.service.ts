import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../interfaces';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get(urls.comments);
  }

  getComment(postId: number):Observable<IComment[]> {
    return this.http.get<IComment[]>(urls.posts + '/' + postId + '/comments');
  }
}
