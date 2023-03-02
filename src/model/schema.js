const mongoose = require("mongoose");
var validator = require("validator")

const blogSchema = new mongoose.Schema({

  App: {
    type: String,
  },
  status: {
    type: String,
  },
  // _id: {
  //   type: String,
  // },
  app_id: {
    type: String,
  },
  fb_rewarded_id: {
    type: String,
  },
  fb_rewarded_display_type: {
    type: String,
  },
  fb_banner_id: {
    type: String,
  },
  fb_banner_display_type: {
    type: String,
  },
  fb_interstitial_id: {
    type: String,
  },
  fb_interstitial_display_type: {
    type: String,
  },
  fb_native_id: {
    type: String,
  },
  fb_native_banner_id: {
    type: String,
  },
  fb_native_display_type: {
    type: String,
  },
  admob_rewarded_display_type: {
    type: String,
  },
  admob_publisher_id: {
    type: String,
  },
  admob_app_id: {
    type: String,
  },
  admob_rewarded_id: {
    type: String,
  },
  admob_interstitial_video_id: {
    type: String,
  },
  admob_banner_id: {
    type: String,
  },
  admob_medium_ractangle_id: {
    type: String,
  },
  admob_banner_display_type: {
    type: String,
  },
  admob_interstitial_id: {
    type: String,
  },
  admob_rewarded_interstitial_id: {
    type: String,
  },
  admob_interstitial_dislpay_type: {
    type: String,
  },
  admob_native_id: {
    type: String,
  },
  admob_native_advance_id: {
    type: String,
  },
  admob_native_advance_video_id: {
    type: String,
  },
  admob_native_display_type: {
    type: String,
  },
  items_beetween_banner_ads: {
    type: String,
  },
  items_between_interstitial_ads: {
    type: String,
  },
  ads_status: {
    type: String,
  },
  message: {
    type: String,
  }

});

const blog = new mongoose.model("collections", blogSchema);

module.exports = blog;