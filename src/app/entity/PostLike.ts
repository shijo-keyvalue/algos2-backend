import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post } from './Post';
import { User } from './User';

@Entity('post_like')
class PostLike {
  @PrimaryColumn('uuid')
  public postId: string;

  @PrimaryColumn('uuid')
  public userId: string;

  @ManyToOne(() => Post, (post) => post.likeCount)
  public post: Post;

  @ManyToOne(() => User, (user) => user.id)
  public user: User;
}

export default PostLike;
