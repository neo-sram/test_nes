import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './classes/userDto';
import { UserService } from './user/user.service';
import { CommentController } from './comment/comment.controller';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, CommentController, PostController],
  providers: [AppService, UserService, PostService, CommentService],
})
export class AppModule {}
