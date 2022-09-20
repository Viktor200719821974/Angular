import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get(this.url);
  }

  getComment(postId: number):Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + postId + '/comments');
  }
}
