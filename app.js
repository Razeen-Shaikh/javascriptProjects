const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
// const { MongoClient } = require("mongodb");

// // Replace the following with values for your environment.
// const username = encodeURIComponent(process.env.MONGO_DB_NAME);
// const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
// const clusterUrl = process.env.MONGO_DB_CLUSTER;

// const authMechanism = "SCRAM-SHA-256";

// // Replace the following with your MongoDB deployment's connection string.
// const uri =
// 	`mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;

// // Create a new MongoClient
// const client = new MongoClient(uri);

// // Function to connect to the server
// async function run() {
// 	try {
// 		// Connect the client to the server
// 		await client.connect();

// 		// Establish and verify connection
// 		await client.db("admin").command({ ping: 1 });
// 		console.log("Connected successfully to server");
// 	} finally {
// 		// Ensures that the client will close when you finish/error
// 		await client.close();
// 	}
// }
// run().catch(console.dir);


const initializeApp = () => {

	const app = express();
	const port = process.env.PORT || 5000;

	// Static Files
	app.use(express.static("public"));
	app.use("/css", express.static(__dirname + "public/css"));
	app.use("/img", express.static(__dirname + "public/images"));
	app.use("/js", express.static(__dirname + "public/js"));
	app.use("/audio", express.static(__dirname + "public/audio"));
	app.use("/video", express.static(__dirname + "public/video"));

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
}

const app = initializeApp();
module.exports = app;