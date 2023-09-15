import { DeepPartial, DeleteResult, EntityManager, getManager, getRepository, Repository } from "typeorm";
import { Product } from "../entity/Product";
import EntityNotFoundException from "../exception/EntityNotFoundException";
import { ErrorCodes } from "../util/errorCode";
import SearchResult from "../util/rest/searchresult";
import PaginationSupportedResponse from "../util/rest/paginationSupportedResponse";
import { Category } from "../entity/Category";

export class ProductDao {

  public getAllProducts = async (categoryIds: string[]): Promise<PaginationSupportedResponse> => {
    const productRepo: Repository<Product> = getRepository(Product);
    let query = productRepo.createQueryBuilder('product').leftJoinAndSelect('product.category', 'category');
    if (Array.isArray(categoryIds) && categoryIds.length > 0) {
      query = query.where('category.id IN (:...categoryIds)', { categoryIds });
    }
    const [products, total] = await query.getManyAndCount();
    return { data: products, total };
  }

  public getAllCategories = async (): Promise<PaginationSupportedResponse> => {
    const categoryRepo: Repository<Category> = getRepository(Category);
    const [categories, total] = await categoryRepo.findAndCount();
    return { data: categories, total };
  }

  public getProductById = async (productId: string): Promise<Product | undefined> => {
    const productRepo: Repository<Product> = getRepository(Product);
    const product = await productRepo.findOne(productId);
    return product;
  }
}
