import { Inject, Injectable } from '@nestjs/common';
import { Blog } from 'src/dtos/blogDto';
import { Commentary } from 'src/dtos/commentaryDto';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CommentService {
  @Inject(UserService)
  @Inject(PostService)
  private readonly userService: UserService;
  private readonly postService: PostService;

  create(id: number, blogNum: number, content: string) {
    const user = this.userService.getById(id);
    const blog = user.blogs[blogNum];
    const comment: Commentary = new Commentary(content);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    if (!blog) {
      throw new Error(
        `Blog with index ${blogNum} not found for user with ID ${id}`,
      );
    }
    blog.comments?.push(comment);
  }

  viewAllComments(id: number) {
    const blogOfUser: Blog[] = this.userService.getById(id)?.blogs;
    blogOfUser.forEach((post: Blog) => {
      console.log(post.comments);
    });
  }
}
