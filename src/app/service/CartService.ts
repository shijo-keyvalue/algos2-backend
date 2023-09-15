import { CartDao } from '../repository/CartDao';
import { CartItemDao } from '../repository/CartItemDao';

export class CartService {
  constructor(
    private cartDao: CartDao,
    private cartItemDao: CartItemDao
    ) {
  }

  public async getCartByUser(userId: string) {
    const cart = await this.cartDao.getCartByUser(userId);
    return cart;
  }

  public async addToCart(userId: string, productId: string, quantity: number, type: string) {
    // Check if the user has an existing cart
    let cart = await this.cartDao.getCartByUser(userId);

    // If the user doesn't have a cart, create a new one
    if (!cart) {
      cart = await this.cartDao.createCart(userId, type);
    }

    // Add the product to the cart
    await this.cartItemDao.addToCart(cart.id, productId, quantity);
  }
}
