import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  load: boolean = false;
  post: Post[] = [];
  comments: Comment[] = [];
  loadDetails: boolean = false;
  loadComments: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService,
              private commentsService: CommentsService,
              // private router: Router
              ) {
    // this.activatedRoute.params.subscribe(params => {
    //   let id = +params['id'];
    //   userService.getUser(id).subscribe(data => this.user = data);
    // });
    this.activatedRoute.data.subscribe(value => {
      this.user = value['data'];
    });
  //   this.activatedRoute.params.subscribe(value => {
  //     // console.log(history.state);
  //     this.user = this.router.getCurrentNavigation()?.extras.state as User;
  //   });
  }

  ngOnInit(): void {
  }

  userPosts(userId: number) {
    this.load = !this.load;
    this.postService.getPost(+userId).subscribe(value => {
      this.post = value;
    });
  }

  userPostsDetails() {
    this.loadDetails = !this.loadDetails;
  }

  postComments(postId: number) {
    if (this.loadComments) {
      this.loadComments = false;
    }
    this.loadComments = true;
    this.commentsService.getComment(+postId).subscribe(value => this.comments = value);
  }

  closeComments() {
    this.loadComments = false;
  }
}
