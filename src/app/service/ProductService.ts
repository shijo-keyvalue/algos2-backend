// import { ProductDto } from "../dto/ProductDto";
import { Product } from "../entity/Product";
import EntityNotFoundException from "../exception/EntityNotFoundException";
import { ProductDao } from "../repository/ProductDao";
import { ErrorCodes } from "../util/errorCode";
import SearchResult from "../util/rest/searchresult";

export class ProductService {
  constructor(private productDao: ProductDao) {}

  public getAllProducts = async (categoryIds: string[]): Promise<SearchResult> => {
    const { data, total } = await this.productDao.getAllProducts(categoryIds);
    return {
      data: data,
      length: data.length,
      total,
    };
  }

  public getAllCategories = async (): Promise<SearchResult> => {
    const { data, total } = await this.productDao.getAllCategories();
    return {
      data: data,
      length: data.length,
      total,
    };
  }

  public getProductById = async (productId: string): Promise<Product> => {
    const product = await this.productDao.getProductById(productId);
    if (!product) {
      const error = ErrorCodes.PRODUCT_NOT_FOUND;
      throw new EntityNotFoundException(error);
    }
    return product;
  }
}
