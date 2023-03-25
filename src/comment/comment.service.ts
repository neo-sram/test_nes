import { Inject, Injectable } from '@nestjs/common';
import { Commentary } from 'src/dtos/commentaryDto';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CommentService {
  @Inject(UserService)
  @Inject(PostService)
  private readonly userService: UserService;
  private readonly postService: PostService;

  create(id: number, blogNum: number, commente: string) {
    const comment: Commentary = new Commentary(commente);
    this.userService.getById(id)?.blogs[blogNum]?.commentaries.push(comment);
  }

  viewAllComments() {}
}
