/**
 * Wraps Controllers for easy import from other modules
 */

import UserController from "./UserController";
import { UserService } from "../service/UserService";
import { UserDao } from "../repository/UserDao";
import ProductController from "./ProductController";
import { ProductService } from "../service/ProductService";
import { ProductDao } from "../repository/ProductDao";

const userDao = new UserDao();
const userService = new UserService(userDao);
const productDao = new ProductDao();
const productService = new ProductService(productDao);

export default [
  new UserController(userService),
  new ProductController(productService)
];
