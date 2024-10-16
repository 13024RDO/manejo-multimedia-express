import { Router } from "express";
import { uploadImage } from "../../middlewares/upload.middleware.js";

const productsRouter = Router();

//POST /products (create a product)
productsRouter.post("/", uploadImage("productImage"), (req, res) => {
  console.log(req.body);

  res.status(201).json({
    Image: "http://localhost:4000/uploads" + req.body.productImage,
    productName,
    price,
  });
});

export { productsRouter };
