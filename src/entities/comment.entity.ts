import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from './topic.entity';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;

  // user.id defines relationship only on this side, user.comments on both sides
  @ManyToOne((type) => User, (user) => user.comments)
  user: User;
  @ManyToOne((type) => Topic, (topic) => topic.comments)
  topic: Topic;
}
