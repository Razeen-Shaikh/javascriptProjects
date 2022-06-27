const express = require("express");
const app = express();
const port = 5000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
const router = require("./src/routes/routes");

app.use("/", router);

// listen on port 5000
app.listen(port, () => console.log(`listening on port ${port}`));
