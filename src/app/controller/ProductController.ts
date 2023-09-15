import { NextFunction, Response } from "express";
import APP_CONSTANTS from "../constants";
import { ProductService } from "../service/ProductService";
import validationMiddleware from "../middleware/validationMiddleware";
import { AbstractController } from "../util/rest/controller";
import RequestWithUser from "../util/rest/request";
/**
 * Implementation of the ProductController route.
 */
class ProductController extends AbstractController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    super(`${APP_CONSTANTS.apiPrefix}/products`);
    this.productService = productService;
    this.initializeRoutes();
  }

  protected initializeRoutes = (): void => {
    this.router.get(
        `${this.path}`,
        this.asyncRouteHandler(this.getAllProducts)
    );

    this.router.get(
        `${this.path}/categories`,
        this.asyncRouteHandler(this.getAllCategories)
    );

    this.router.get(
      `${this.path}/:id`,
      this.asyncRouteHandler(this.getProductById)
    );
  }

  private getAllProducts = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const categoryIdsParam: string | undefined = request.query.categoryIds as string;
    let categoryIds: string[] = [];
    try {
        categoryIds = JSON.parse(categoryIdsParam || '[]');
    } catch (error) {
        console.error('Error parsing categoryIds:', error);
    }
    const products = await this.productService.getAllProducts(categoryIds);
    response.send(
      this.fmt.formatResponse(
        products,
        Date.now() - request.startTime,
        "OK"
      )
    );
  }

  private getAllCategories = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const categories = await this.productService.getAllCategories();
    response.send(
      this.fmt.formatResponse(
        categories,
        Date.now() - request.startTime,
        "OK"
      )
    );
  }

  private getProductById = async (
    request: RequestWithUser,
    response: Response,
    next: NextFunction
  ) => {
    const productId = request.params.id;
    const product = await this.productService.getProductById(productId);
    if (!product) {
      return response.status(404).json({ error: 'Product not found' });
    }
    response.send(
      this.fmt.formatResponse(
        product,
        Date.now() - request.startTime,
        "OK"
      )
    );
  }
}

export default ProductController;