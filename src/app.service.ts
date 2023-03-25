import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "hello to the blog API , where you can creat blogs and comment on other users's blogs!";
  }
}
