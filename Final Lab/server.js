var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const asyncHandler = require("express-async-handler");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const protect = require("./middleware/protect");
const User = require("./models/Users");

// set the view engine to ejs
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connect to MongoDB
connectDB();

app.use(
  session({
    secret: "some secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://najm:najm@cluster0.crfdbx1.mongodb.net/",
    }), // replace with your MongoDB connection string
  })
);

// use res.render to load up an ejs view file
app.use(cookieParser());

// index page
app.get("/", protect, function (req, res) {
  res.render("pages/home");
});

app.post("/register", async function (req, res) {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    req.session.user = {
      id: user._id,
      name: user.name,
    };
    res.redirect("pages/home"); // redirect to home page or wherever you like
  } catch (err) {
    console.error(err);
    res.redirect("/register"); // redirect back to register page if registration fails
  }
});
app.get("/home", protect, function (req, res) {
  res.render("pages/home");
});
app.get("/login", function (req, res) {
  res.render("pages/login");
});

app.post("/login", async function (req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    req.session.user = {
      id: user._id,
      name: user.name,
    };
    res.redirect("/"); // redirect to home page or wherever you like
  } else {
    res.redirect("/login"); // redirect back to login page if authentication fails
  }
});
app.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.redirect("/some-error-page");
    }
    res.redirect("/login");
  });
});
app.get("/register", function (req, res) {
  res.render("pages/register");
});
app.get("/update", function (req, res) {
  res.render("pages/update");
});
app.put("/update", protect, async function (req, res) {
  const { name, email, password } = req.body;
  try {
    // update the user in the database
    console.log(req.user.id);

    const user = await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      password,
    });
    req.session.user = {
      id: user._id,
      name: user.name,
    };
    // res.redirect("/home");
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

app.listen(8080);
console.log("Server is listening on port 8080");
