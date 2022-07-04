const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/audio", express.static(__dirname + "public/audio"));

// Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const { router, projects_router } = require("./src/routes/routes");

app.use("/", router);
app.use("/projects", projects_router)

// listen on port 5000
app.listen(port, () => console.log(`listening on port ${port}`));
