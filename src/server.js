const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.disable("x-powered-by");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./router"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
