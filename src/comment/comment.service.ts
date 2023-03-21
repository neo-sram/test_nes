import { Injectable } from '@nestjs/common';
import { Commentary } from 'src/classes/commentaryDto';

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
