import { PostDto } from "../dto/PostDto";
import { Post } from "../entity/Post"; 
import EntityNotFoundException from "../exception/EntityNotFoundException";
import { PostDao } from "../repository/PostDao";
import { PostLikeDao } from "../repository/PostLikeDao";
import { ErrorCodes } from "../util/errorCode";
import SearchResult from "../util/rest/searchresult";

export class PostService {
  constructor(
    private postDao: PostDao,
    private postLikeDao: PostLikeDao
  ) {}

  public createPost = async (postDto: PostDto): Promise<Post> => {
    const createdPost = await this.postDao.createPost(postDto);
    return createdPost;
  }

  public getAllPosts = async (userId: string): Promise<SearchResult> => {
    const { data, total } = await this.postDao.getAllPosts(userId);
    return {
      data: data,
      length: data.length,
      total
    };
  }

  public getPostById = async (postId: string): Promise<Post> => {
    const post = await this.postDao.getPostById(postId);
    if (!post) {
      const error = ErrorCodes.POST_NOT_FOUND;
      throw new EntityNotFoundException(error);
    }
    return post;
  }


  public likePost = async (postId: string, userId: string): Promise<Post> => {
    try {
      const alreadyLiked = await this.postLikeDao.checkIfLiked(postId, userId);
      if(alreadyLiked){
        const error = ErrorCodes.POST_ALREADY_LIKED;
        throw new EntityNotFoundException(error);
      }
      // Update the likeCount in the post table
      const post = await this.postDao.getPostById(postId);
      if (!post) {
        const error = ErrorCodes.POST_NOT_FOUND;
        throw new EntityNotFoundException(error);
      }
      post.likeCount += 1;
      await this.postDao.updatePostLike(postId, post.likeCount);

      // Add a new entry to the post_like table
      await this.postLikeDao.create(postId, userId);

      return post;
    } catch (error) {
      throw error;
    }
  }

  public unlikePost = async (postId: string, userId: string): Promise<Post> => {
    try {
      const alreadyLiked = await this.postLikeDao.checkIfLiked(postId, userId);
      if(!alreadyLiked){
        const error = ErrorCodes.POST_NOT_LIKED;
        throw new EntityNotFoundException(error);
      }
      // Update the likeCount in the post table
      const post = await this.postDao.getPostById(postId);
      if (!post) {
        const error = ErrorCodes.POST_NOT_FOUND;
        throw new EntityNotFoundException(error);
      }
      post.likeCount -= 1;
      await this.postDao.updatePostLike(postId, post.likeCount);

      // Add a new entry to the post_like table
      await this.postLikeDao.delete(postId, userId);

      return post;
    } catch (error) {
      throw error;
    }
  }
//   public updatePost = async (postId: string, postDto: PostDto): Promise<Post> => {
//     const updatedPost = await this.postDao.update(postId, postDto);
//     return updatedPost;
//   }

  public deletePost = async (postId: string): Promise<void> => {
    await this.postDao.deletePost(postId);
  }

}
