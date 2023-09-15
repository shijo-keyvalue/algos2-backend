/**
 * Wraps Controllers for easy import from other modules
 */

import UserController from "./UserController";
import { UserService } from "../service/UserService";
import { UserDao } from "../repository/UserDao";
import PostController from "./PostController";
import { PostService } from "../service/PostService";
import { PostDao } from "../repository/PostDao";
import ProductController from "./ProductController";
import { ProductService } from "../service/ProductService";
import { ProductDao } from "../repository/ProductDao";
import GardenSiteController from "./GardenSiteController";
import { GardenSiteService } from "../service/GardenSiteService";
import { GardenSiteDao } from "../repository/GardenSiteDao";
import { PlantService } from "../service/PlantService";
import { PlantDao } from "../repository/PlantDao";
import PlantController from "./PlantController";
import { CartService } from "../service/CartService";
import { CartItemDao } from "../repository/CartItemDao";
import { CartDao } from "../repository/CartDao";
import CartController from "./CartController";
import { PostLikeDao } from "../repository/PostLikeDao";

const userDao = new UserDao();
const userService = new UserService(userDao);
const postDao = new PostDao();
const postLikeDao = new PostLikeDao()
const postService = new PostService(postDao, postLikeDao);
const productDao = new ProductDao();
const productService = new ProductService(productDao);
const gardenSiteDao = new GardenSiteDao();
const gardenSiteService = new GardenSiteService(gardenSiteDao);
const plantDao = new PlantDao();
const plantService = new PlantService(plantDao);
const cartDao = new CartDao();
const cartItemDao = new CartItemDao();
const cartService = new CartService(cartDao, cartItemDao);

export default [
  new UserController(userService),
  new ProductController(productService),
  new GardenSiteController(gardenSiteService),
  new PlantController(plantService),
  new CartController(cartService),
  new PostController(postService),
  new ProductController(productService)

];
