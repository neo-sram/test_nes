import { Injectable } from '@nestjs/common';
import { Commentary } from 'src/dtos/commentaryDto';

@Injectable()
export class CommentService {
  private readonly comments: Commentary[] = [];

  create(comment: Commentary) {
    this.comments.push(comment);
  }

  viewAllComments() {
    return this.comments;
  }
}
