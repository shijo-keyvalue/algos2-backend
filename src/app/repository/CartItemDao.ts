import { getRepository, Repository } from 'typeorm';
import { CartItem } from '../entity/CartItem';

export class CartItemDao {

  public async addToCart(cartId: string, productId: string, quantity: number): Promise<void> {
    const cartItemRepository: Repository<CartItem> = getRepository(CartItem);
    const existingCartItem = await cartItemRepository.findOne({
      where: { cartId, productId },
    });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await cartItemRepository.save(existingCartItem);
    } else {
      const newCartItem = new CartItem();
      newCartItem.cartId = cartId;
      newCartItem.productId = productId;
      newCartItem.quantity = quantity;
      await cartItemRepository.save(newCartItem);
    }
  }
}
