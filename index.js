const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = 8080
app.listen(port, () => console.log("server is listening on port:" + port));
