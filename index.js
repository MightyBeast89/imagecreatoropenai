const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

//enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
