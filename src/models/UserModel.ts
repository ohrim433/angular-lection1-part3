import {PostModel} from './PostModel';

export class UserModel {
  name: string;
  username: string;
  website: string;
  email: string;
  id: number;
  posts: PostModel[] = [];
}
