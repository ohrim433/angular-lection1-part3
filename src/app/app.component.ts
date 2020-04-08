import {Component} from '@angular/core';
import {CommentModel} from '../models/CommentModel';
import {PostModel} from '../models/PostModel';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1{background-color: aquamarine}']
})
export class AppComponent {
  users: UserModel[] = [];

  constructor(
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService) {
    this.userService.getUsers().subscribe(users => {
      // this.users = users;
      this.postService.getPosts().subscribe(posts => {
        this.commentService.getComments().subscribe(comments => {
          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
              }
            }
            this.users.push(user);
          }
          console.log(this.users);
        });
      });
    });


  }


}
