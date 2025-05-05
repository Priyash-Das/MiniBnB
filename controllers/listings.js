const Listing = require("../models/listing.js");

// Index route
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

// New route (Render New Form)
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Show route (Render Show Page)
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Sorry, the listing you’re looking for doesn’t exist.");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

// Create route (Create New Listing)
module.exports.createListing = async (req, res) => {
  let filename = req.file.filename;
  let url = req.file.path;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { filename, url };
  await newListing.save();
  req.flash("success", "Your listing has been created successfully!");
  res.redirect("/listings");
};

// Edit route (Render Edit Form)
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Sorry, the listing you’re looking for doesn’t exist.");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = listing.image.url.replace(
    "/upload/",
    "/upload/w_200,h_150,c_fill/"
  );
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// Update route (Update Existing Listing)
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );
  if (typeof req.file !== "undefined") {
    let filename = req.file.filename;
    let url = req.file.path;
    listing.image = { filename, url };
    await listing.save();
  }
  req.flash("success", "Listing updated successfully!");
  res.redirect(`/listings/${id}`);
};

// Delete route (Delete Existing Listing)
module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListings = await Listing.findByIdAndDelete(id);
  console.log(
    `Deleted listing:\nTitle: ${deletedListings.title}\nID: ${deletedListings._id}`
  );
  req.flash("success", "The listing has been successfully deleted.");
  res.redirect("/listings");
};
