import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../../services/comments.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comment: Comment;
  // comments: object;

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    // this.commentsService.getComments().subscribe((value) => {
    //   console.log(value);
    //   this.comments = value;
    // });
  }

}
