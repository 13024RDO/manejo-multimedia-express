import express from "express";
import { upload } from "../helpers/multer.js";
import {
  createProduct,
  listProducts,
} from "../Controllers/products.controllers.js";

const router = express.Router();

router.post("/products", upload.single("image"), createProduct);

router.get("/products", listProducts);

export default router;
