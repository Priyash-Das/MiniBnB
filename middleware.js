const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utilities/ExpressError.js");

// Validation middleware for listing data
// Ensures that the incoming request data is valid according to the listingSchema
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", "); // Combine all error messages
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Validation middleware for review data
// Ensures that the incoming review data matches the expected format and constraints
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", "); // Combine all error messages
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Middleware to check if the user is logged in
// Redirects the user to the login page if they are not authenticated and stores the original URL
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl; // Save the URL before redirecting to login page.
    req.flash("error", "You must be logged in to create a listing.");
    return res.redirect("/login");
  }
  next();
};

// Middleware to save the redirect URL after login
// If a user is redirected to the login page, this saves the URL so they can be sent back after successful login
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl; // Store the redirect URL in locals
  }
  next();
};

// Middleware to check if the logged-in user is the owner of the listing
// Ensures that only the owner of the listing can perform actions like edit or delete
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currentUser._id)) {
    req.flash(
      "error",
      "You are not authorized to perform this action on this listing, as you are not the owner."
    );
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// Middleware to check if the logged-in user is the author of the review
// Ensures that only the author of the review can perform actions like edit or delete
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currentUser._id)) {
    req.flash(
      "error",
      "You are not authorized to perform this action on this review, as you are not the author."
    );
    return res.redirect(`/listings/${id}`);
  }
  next();
};
