const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.REACT_APP_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
