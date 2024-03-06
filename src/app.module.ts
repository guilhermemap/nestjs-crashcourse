import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, CommentModule, TypeOrmModule.],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
