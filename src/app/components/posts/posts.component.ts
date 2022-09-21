import {Component, OnInit} from '@angular/core';
import {IPost} from '../../interfaces';
import {PostService} from '../../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];
  load = false;

  constructor(private postService: PostService,
  ) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  productsDetails(id: number) {
    this.load = !this.load;
  }
}
