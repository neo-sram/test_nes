import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';

import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  @Inject(CommentService)
  private readonly commentService: CommentService;

  @Post('commentCreate/postOfUser/:id/PostNum/:blogNum')
  async create(
    @Param('id') id: number,
    @Param('blogNum') blogNum: number,
    @Body() content: string,
  ) {
    this.commentService.create(id, blogNum, content);
  }

  @Get('showComments/:id')
  async viewAllComments(@Param('id') id: number) {
    return this.commentService.viewAllComments(id);
  }
}
