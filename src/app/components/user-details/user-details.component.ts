import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentsService, PostService} from 'src/app/services';
import {IComment, IPost, IUser} from '../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;
  load: boolean = false;
  post: IPost[] = [];
  comments: IComment[] = [];
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
  //     this.user = this.router.getCurrentNavigation()?.extras.state as UserInterface;
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
