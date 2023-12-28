var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
const connectDB = require("./config/db");
const User = require("./models/Users");
const formValidation = require("./middleware/formValidation");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(formValidation);

connectDB();

app.get("/", async function (req, res) {
  try {
    const users = await User.find({});
    res.render("pages/home", { users });
  } catch (err) {
    console.error(err);
    res.redirect("/error");
  }
});
app.get("/error", function (req, res) {
  res.render("pages/error");
});
app.get("/add", function (req, res) {
  res.render("pages/add");
});

app.post("/add", formValidation, async function (req, res) {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("/error");
  }
});

app.get("/update/:id", async function (req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.render("pages/update", { user });
  } catch (err) {
    console.error(err);
    res.redirect("/error");
  }
});

app.post("/update/:id", formValidation, async function (req, res) {
  const { name, email, password } = req.body;
  try {
    let updateData = { name, email, password };

    await User.findByIdAndUpdate(req.params.id, updateData);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect(`/update/${req.params.id}`);
  }
});

app.get("/delete/:id", async function (req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.redirect("/error");
  }
});

app.listen(5000, function () {
  console.log("Server is listening on port 5000");
});
