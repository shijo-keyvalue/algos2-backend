import { getRepository, Repository } from 'typeorm';
import { Cart } from '../entity/Cart';

export class CartDao {
  public async getCartByUser(userId: string): Promise<Cart | undefined> {
    const cartRepository: Repository<Cart> = getRepository(Cart);
    const cart = await cartRepository
        .createQueryBuilder('cart')
        .leftJoinAndSelect('cart.cartItems', 'cartItems')
        .leftJoinAndSelect('cartItems.product', 'product')
        .where('cart.userId = :userId', { userId }) // Replace 'userId' with your actual column name
        .getOne();
    return cart;
  }

  public async createCart(userId: string, type: string): Promise<Cart> {
    const cartRepository: Repository<Cart> = getRepository(Cart);
    const cart = new Cart();
    cart.userId = userId;
    cart.type = type;
    return cartRepository.save(cart);
  }
}
