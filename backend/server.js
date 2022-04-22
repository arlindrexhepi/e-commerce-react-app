const path = require("path");
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

//Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.status(500).send("Please set the file to development");
  });
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
