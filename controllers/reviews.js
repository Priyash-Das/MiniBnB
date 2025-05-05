const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

// Reviwe route (DELETE)
// Remove the review associated with the current user from the listing.
// Save the updated listing.
// Redirect the user to the listing page with a success message.
module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success", "Your review has been added successfully.");
  res.redirect(`/listings/${listing._id}`);
};

// Review Route (DELETE)
// Delete the review by ID and remove its reference from the listing,
// then redirect to the listing page with a success message.
module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "The review has been deleted successfully.");
  res.redirect(`/listings/${id}`);
};
