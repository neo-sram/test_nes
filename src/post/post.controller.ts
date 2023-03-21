import { Controller, Post, Get, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { Blog } from 'src/classes/blogDto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async create(@Body() post: Blog) {
    this.postService.create(post);
  }

  @Get()
  async listAllBlogs(): Promise<Blog[]> {
    return this.postService.allBlogs();
  }
}
