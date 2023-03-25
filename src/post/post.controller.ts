import { Controller, Post, Get, Body, Param, Inject } from '@nestjs/common';
import { PostService } from './post.service';
import { Blog } from 'src/dtos/blogDto';

@Controller('user')
export class PostController {
  @Inject(PostService)
  private readonly postService: PostService;

  @Post()
  async create(@Body() post: Blog, id: number) {
    this.postService.create(post, id);
  }

  @Get(':id')
  async listAllBlogs(@Param() id: number): Promise<Blog[]> {
    return this.postService.listAllBlogs(id);
  }
}
