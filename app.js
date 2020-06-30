const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const config = require("./config");

// routes
const routes = require("./routes");

const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	}) // Adding new mongo url parser
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

// Use Routes
app.use(routes);

// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
// 	// Set static folder
// 	app.use(express.static("client/build"));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// 	});
// }

module.exports = app;
