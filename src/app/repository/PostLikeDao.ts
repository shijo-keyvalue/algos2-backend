import { getRepository, Repository } from "typeorm";
import PostLike from "../entity/PostLike";

export class PostLikeDao {
    public create = async (postId: string, userId: string): Promise<PostLike> => {
      const postLikeRepo: Repository<PostLike> = getRepository(PostLike);
      const createdLike: PostLike = await postLikeRepo.save({
        postId: postId,
        userId: userId
      });
      return createdLike;
    }

    public delete = async (postId: string, userId: string): Promise<void> => {
      const postLikeRepo: Repository<PostLike> = getRepository(PostLike);
      await postLikeRepo.delete({
        postId: postId,
        userId: userId
      });
    }

    public checkIfLiked = async (postId: string, userId: string): Promise<boolean> => {
      const postLikeRepo: Repository<PostLike> = getRepository(PostLike);
      const liked = await postLikeRepo.findOne({ postId, userId });
      if(liked){
        return true

      }else{
        return false
      }
    }
}
