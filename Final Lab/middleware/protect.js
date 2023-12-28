const asyncHandler = require("express-async-handler");
const User = require("../models/Users");

module.exports = asyncHandler(async function protect(req, res, next) {
  let userSession = req.session.user;

  if (userSession) {
    userId = userSession.id;
    try {
      user = await User.findById(userId).select("-password");
      if (user) {
        req.user = user;
        next();
      } else {
        res.redirect("/login");
      }
    } catch (error) {
      console.log(error);
    }

    // search the database for the user with the id of userId
    // if the user exists, attach it to the request object
    // if the user does not exist, redirect to login

    next();
  } else {
    res.redirect("/login");
  }
});
