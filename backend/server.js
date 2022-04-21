const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.REACT_APP_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
