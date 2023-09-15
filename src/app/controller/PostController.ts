import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import validationMiddleware from "../middleware/validationMiddleware";
import { PostService } from "../service/PostService";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
import { PostDto } from "../dto/PostDto";

class PostController extends AbstractController {
  private postService: PostService; 

  constructor(postService: PostService) {
    super(`${APP_CONSTANTS.apiPrefix}/posts`);
    this.postService = postService;
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
    this.router.get(
      `${this.path}`,
      this.asyncRouteHandler(this.getAllPosts)
    );
    this.router.get(
      `${this.path}/:id`,
      this.asyncRouteHandler(this.getPostById)
    );
    this.router.patch(
      `${this.path}/:id/like/:userId`,
      this.asyncRouteHandler(this.likePost)
    );
    this.router.patch(
      `${this.path}/:id/unlike/:userId`,
      this.asyncRouteHandler(this.unlikePost)
    );
    this.router.post(
      `${this.path}/create`,
      validationMiddleware(PostDto, APP_CONSTANTS.body), 
      this.asyncRouteHandler(this.createPost)
    );
    // this.router.put(
    //   `${this.path}/:id`,
    //   validationMiddleware(UpdatePostDto, APP_CONSTANTS.body), // Replace with your DTO if needed
    //   this.asyncRouteHandler(this.updatePost)
    // );
    this.router.delete(
      `${this.path}/:id`,
      this.asyncRouteHandler(this.deletePost)
    );
  }

  private createPost = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const postData: PostDto = request.body; 
    const post = await this.postService.createPost(postData);
    response.send(
      this.fmt.formatResponse(post, Date.now() - request.startTime, "OK")
    );
  }

  private getAllPosts = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const userId: string = request.query.userId as string;
    const posts = await this.postService.getAllPosts(userId);
    response.send(
      this.fmt.formatResponse(
        posts,
        Date.now() - request.startTime,
        "OK"
      )
    );
  }

  private getPostById = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const postId = request.params.id;
    const post = await this.postService.getPostById(postId);
    response.send(
      this.fmt.formatResponse(post, Date.now() - request.startTime, "OK")
    );
  }

  private likePost = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const postId = request.params.id;
    const userId = request.params.userId;
  
    const post = await this.postService.likePost(postId, userId);
  
    response.send(
      this.fmt.formatResponse(post, Date.now() - request.startTime, "OK")
    );
  }

  private unlikePost = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const postId = request.params.id;
    const userId = request.params.userId;
  
    const post = await this.postService.unlikePost(postId, userId);
  
    response.send(
      this.fmt.formatResponse(post, Date.now() - request.startTime, "OK")
    );
  }

//   private updatePost = async (
//     request: RequestWithUser,
//     response: Response,
//     next: NextFunction
//   ) => {
//     const postId = request.params.id;
//     const updateData: UpdatePostDto = request.body; // Replace with your DTO if needed
//     const updatedPost = await this.postService.updatePost(postId, updateData);
//     response.send(
//       this.fmt.formatResponse(updatedPost, Date.now() - request.startTime, "OK")
//     );
//   }

  private deletePost = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const postId = request.params.id;
    await this.postService.deletePost(postId);
    response.sendStatus(204);
  }
}

export default PostController;
