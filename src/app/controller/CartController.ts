import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import validationMiddleware from "../middleware/validationMiddleware";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
import { CartService } from "../service/CartService";
/**
 * Implementation of the CartController route.
 */
class CartController extends AbstractController {
  private cartService: CartService;

  constructor(cartService: CartService) {
    super(`${APP_CONSTANTS.apiPrefix}/cart`);
    this.cartService = cartService;
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
    // this.router.post(
    //     `${this.path}`,
    //     this.asyncRouteHandler(this.createCart)
    // );

    this.router.get(
        `${this.path}/:userId`,
        this.asyncRouteHandler(this.getCartByUser)
    );

    this.router.post(
      `${this.path}`,
      this.asyncRouteHandler(this.addToCart)
    );

    this.router.delete(
        `${this.path}/:userId`,
        this.asyncRouteHandler(this.clearCart)
    );
  }

  public getCartByUser = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const userId = request.params.userId;
    const cart = await this.cartService.getCartByUser(userId);
    response.send(
        this.fmt.formatResponse(
            cart,
            Date.now() - request.startTime,
            "OK"
        )
    );
  };

  public addToCart = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
      const { userId, productId, quantity, type } = request.body;
      await this.cartService.addToCart(userId, productId, quantity, type);
      response.send(
        this.fmt.formatResponse(
            "Item Added to Cart",
            Date.now() - request.startTime,
            "OK"
        )
    );
  };

  public clearCart = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
    ) => {
    const userId = request.params.userId;
    await this.cartService.clearCart(userId);
    response.send(
        this.fmt.formatResponse(
            "Cart cleared successfully",
            Date.now() - request.startTime,
            "OK"
        )
    );
  };

}

export default CartController;