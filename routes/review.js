const express = require("express");
const router = express.Router({ mergeParams: true }); // Needed to access listing ID from parent route
const wrapAsync = require("../utilities/wrapAsync.js");
const {
  isLoggedIn,
  isReviewAuthor,
  validateReview,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// Reviwe route (POST)
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Reviwe route (DELETE)
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
