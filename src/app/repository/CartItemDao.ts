import { getConnection, getRepository, QueryRunner, Repository } from 'typeorm';
import { CartItem } from '../entity/CartItem';
import { Cart } from '../entity/Cart';

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

  public deleteCartItemsByUserId = async (userId: string) => {
    const cartItemRepo: Repository<CartItem> = getRepository(CartItem);
    const cartRepo: Repository<Cart> = getRepository(Cart);
    const query = `
    SELECT id AS "cartId"
    FROM cart
    WHERE user_id = $1; 
  `;
  const connection = getConnection(); // Get the existing connection or create one
  const queryRunner: QueryRunner = connection.createQueryRunner();
  const result = await queryRunner.query(query, [userId]);
  const cartId = result ? result[0].cartId : null;
    const queryBuilder = cartItemRepo.createQueryBuilder()
        .update(CartItem)
        .set({ deletedAt: new Date() }) // Set deletedAt to the current timestamp
        .where("cartId = :cartId", { cartId });

    await queryBuilder.execute();
  };
}
