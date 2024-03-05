import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComments(userId: number) {
    return 'these are the comments of the user with id ' + userId;
  }
}
