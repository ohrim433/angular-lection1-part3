import {Component} from '@angular/core';
import {CommentModel} from '../models/CommentModel';
import {PostModel} from '../models/PostModel';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';

@Component({
  selector: 'app-root',
  template: `<h1>Posts</h1>
  <app-post *ngFor="let p of posts" [post]="p"></app-post>
  <h1>Comments</h1>
  <app-comment *ngFor="let c of comments" [comment]="c"></app-comment>`,
  styles: ['h1{background-color: aquamarine}']
})
export class AppComponent {
  comments: CommentModel[];
  posts: PostModel[];

  constructor(private postService: PostService, private commentService: CommentService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
  }

}
