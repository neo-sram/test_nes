import { Controller, Post, Get, Body, Param, Inject } from '@nestjs/common';
import { PostService } from './post.service';
import { Blog } from 'src/dtos/blogDto';

@Controller('post')
export class PostController {
  @Inject(PostService)
  private readonly postService: PostService;

  @Post('postCreate/:id/:content')
  async create(@Param('id') id: number, @Param('content') content: string) {
    this.postService.create(content, id);
  }

  @Get('getPostOf/:id')
  async listAllBlogs(@Param('id') id: number): Promise<Blog[]> {
    return this.postService.listAllBlogs(id);
  }
}
