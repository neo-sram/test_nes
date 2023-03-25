import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Blog } from 'src/dtos/blogDto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async create(@Body() post: Blog) {
    this.postService.create(post);
  }

  @Get(':id')
  async listAllBlogs(@Param() id: number) {
    return this.postService.listAllBlogs(id);
  }
}
