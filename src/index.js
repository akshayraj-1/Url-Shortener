const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const ejsmate = require("ejs-mate");

// Controllers
const homeController = require("./controllers/home.controller");
const authController = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const urlController = require("./controllers/url.controller");

// Environment Variables
dotenv.config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV?.trim()}`) });

// Express Setup
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // extended -> true (parse with qs lib); false (parse with querystring lib)
app.use(express.json());
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// EJS/View Engine Setup
app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home routes
app.get("/", homeController.getHome);
app.get('/favicon.ico', (req, res) => res.status(204));

// Auth routes
app.get("/login", authController.getLogin);
app.get("/signup", authController.getSignup);
app.post("/api/login", authController.loginUser);
app.post("/api/signup", authController.signupUser);
app.post("/api/google-auth", authController.googleAuth);

// User routes
app.get("/user-dashboard", userController.getDashboard);
app.get("/api//user-shorten-urls", userController.getShortenUrls);

// Shorten URL routes
app.post("/api/short-url", urlController.createShortenUrl);
app.get("/:shortUrlId", urlController.getOriginalUrl);

// 404
app.use((req, res) => {
    res.status(404).render("pages/404", { title: "Page Not Found" });
});


// Connect to database
console.warn("Connecting to database...");
mongoose.connect(process.env.MONGO_URI, { dbName: "url-shortener" }).then(_ => {
    console.info("Connected to database!");
    app.listen(process.env.PORT, () => {
        console.info(`Server running on port: ${process.env.PORT}`);
    });
}).catch(error => console.error(`Failed to connect to database: ${error}`));