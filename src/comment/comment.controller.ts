import { Controller, Inject, Param, Post } from '@nestjs/common';

import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  @Inject(CommentService)
  private readonly commentService: CommentService;

  @Post('commentCreate/postOfUser/:id/PostNum/:blogNum/:content')
  async create(
    @Param('id') id: number,
    @Param('PostNum') postNum: number,
    @Param('content') content: string,
  ) {
    this.commentService.create(id, postNum, content);
  }
}
