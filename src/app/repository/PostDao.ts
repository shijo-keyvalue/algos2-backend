import { getManager, getRepository, Repository } from "typeorm";
// import EntityNotFoundException from "../exception/EntityNotFoundException";
// import { ErrorCodes } from "../util/errorCode";
import PaginationSupportedResponse from "../util/rest/paginationSupportedResponse";
import { PostDto } from "../dto/PostDto"; 
import { Post } from "../entity/Post"; 
import { isNonEmptyArray } from "../util/commonUtil";
import { User } from "../entity/User";

export class PostDao {
    public createPost = async (postDto: PostDto): Promise<Post> => {
      const postRepo: Repository<Post> = getRepository(Post);
      const createdPost: Post = await postRepo.save(postDto);
      return createdPost;
    }

    public updatePostLike = async (postId: string, likeCount: number): Promise<Post> => {
      const postRepo: Repository<Post> = getRepository(Post);
      await postRepo.update(postId, {
        likeCount: likeCount
      });
      const updatedPost: Post = await postRepo.findOne(postId);
      return updatedPost;
    }

    public deletePost = async (postId: string): Promise<void> => {
      const postRepo: Repository<Post> = getRepository(Post);
      await postRepo.delete(postId);
    }

  public getPostById = async (postId: string): Promise<any | undefined> => {
    const query = getManager()
      .createQueryBuilder(Post, "post")
      .leftJoinAndMapMany(
        "post.comments",
        Post,
        "comment",
        "comment.parent_id = post.id"
      )
      .leftJoinAndMapMany("comment.user", User, "comment_user", "comment_user.id = comment.user_id")
      .leftJoinAndSelect("post.user", "user")
      .where("post.id = :postId", { postId })

      // console.log(query.getQueryAndParameters())
      const post = await query.getOne();  
    return post;
  };
  
  
  public getAllPosts = async (
    userId: string
  ): Promise<PaginationSupportedResponse> => {
    let query = getManager()
    .createQueryBuilder(Post,"post")
    .leftJoinAndMapMany("post.comments", Post, "comment", "comment.parent_id = post.id")
    .leftJoinAndMapMany("comment.user", User, "comment_user", "comment_user.id = comment.user_id")
    .leftJoinAndSelect("post.user", "user")
    .where("post.is_post = true");

    if (userId) {
      query.andWhere('post.user_id = :userId', { userId });
    }
  
    // console.log(query.getQueryAndParameters())
    const [records, total] = await query.getManyAndCount();

    return { data: isNonEmptyArray(records) ? records : [], total };
  };

}
