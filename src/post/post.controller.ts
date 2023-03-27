import { Controller, Post, Get, Body, Param, Inject } from '@nestjs/common';
import { PostService } from './post.service';
import { Blog } from 'src/dtos/blogDto';

@Controller('post')
export class PostController {
  @Inject(PostService)
  private readonly postService: PostService;

  @Post('postCreate')
  async create(@Body() post: Blog) {
    this.postService.create(post);
  }

  @Get('getPostOf/:id')
  async listAllBlogs(@Param('id') id: number): Promise<Blog[]> {
    return this.postService.listAllBlogs(id);
  }
}
