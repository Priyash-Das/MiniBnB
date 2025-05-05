const User = require("../models/user.js");

// Render the signup form.
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// Handle the signup form submission.
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Registration successful! Welcome to MiniBnB!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

// Render the login form.
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// Handle the login form submission.
module.exports.login = async (req, res) => {
  req.flash("success", "Login successful!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// Handle the logout request.
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged out successfully!");
    res.redirect("/listings");
  });
};
