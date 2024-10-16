import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import { productsRouter } from "./routers/products.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  "/uploads",
  express.static(path.join(path.resolve(), "src", "uploads"))
);

//routes
app.use("/products", productsRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
