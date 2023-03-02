var Todo = require("../model/schema");
const HTTP = require("../../constant/response.constant");
const fs = require("fs");

var path = require("path");

class class1 {

    static a = async (req, res) => {

        try {

            var OriginalData = await Todo.find({ App: req.params.id });

            if (OriginalData != 0) {
                var OriginalData = OriginalData[0]
            } else {

                var OriginalData = {
                    "App": "",
                    "status": "",
                    "_id": "",
                    "app_id": "",
                    "fb_rewarded_id": "",
                    "fb_rewarded_display_type": "",
                    "fb_banner_id": "",
                    "fb_banner_display_type": "",
                    "fb_interstitial_id": "",
                    "fb_interstitial_display_type": "",
                    "fb_native_id": "",
                    "fb_native_banner_id": "",
                    "fb_native_display_type": "",
                    "admob_rewarded_display_type": "",
                    "admob_publisher_id": "",
                    "admob_app_id": "",
                    "admob_rewarded_id": "",
                    "admob_interstitial_video_id": "",
                    "admob_banner_id": "",
                    "admob_medium_ractangle_id": "",
                    "admob_banner_display_type": "",
                    "admob_interstitial_id": "",
                    "admob_rewarded_interstitial_id": "",
                    "admob_interstitial_dislpay_type": "",
                    "admob_native_id": "",
                    "admob_native_advance_id": "",
                    "admob_native_advance_video_id": "",
                    "admob_native_display_type": "",
                    "items_beetween_banner_ads": "",
                    "items_between_interstitial_ads": "",
                    "ads_status": "",
                    "message": ""
                }

            }

            res.render('index', { OriginalData });

        } catch (err) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors": [{
                    "message": "Something went wrong!",
                    "code": HTTP.INTERNAL_SERVER_ERROR
                }
                ]
            })

        }

    }

    static b = async (req, res) => {

        try {

            if (req.body.App == req.params.id) {

                var OriginalData = await Todo.find({ App: req.body.App });

                if (OriginalData.length == 0) {

                    let data = new Todo({

                        App: req.body.App,
                        status: req.body.status,
                        // _id: req.body._id,
                        app_id: req.body.app_id,
                        fb_rewarded_id: req.body.fb_rewarded_id,
                        fb_rewarded_display_type: req.body.fb_rewarded_display_type,
                        fb_banner_id: req.body.fb_banner_id,
                        fb_banner_display_type: req.body.fb_banner_display_type,
                        fb_interstitial_id: req.body.fb_interstitial_id,
                        fb_interstitial_display_type: req.body.fb_interstitial_display_type,
                        fb_native_id: req.body.fb_native_id,
                        fb_native_banner_id: req.body.fb_native_banner_id,
                        fb_native_display_type: req.body.fb_native_display_type,
                        admob_rewarded_display_type: req.body.admob_rewarded_display_type,
                        admob_publisher_id: req.body.admob_publisher_id,
                        admob_app_id: req.body.admob_app_id,
                        admob_rewarded_id: req.body.admob_rewarded_id,
                        admob_interstitial_video_id: req.body.admob_interstitial_video_id,
                        admob_banner_id: req.body.admob_banner_id,
                        admob_medium_ractangle_id: req.body.admob_medium_ractangle_id,
                        admob_banner_display_type: req.body.admob_banner_display_type,
                        admob_interstitial_id: req.body.admob_interstitial_id,
                        admob_rewarded_interstitial_id: req.body.admob_rewarded_interstitial_id,
                        admob_interstitial_dislpay_type: req.body.admob_interstitial_dislpay_type,
                        admob_native_id: req.body.admob_native_id,
                        admob_native_advance_id: req.body.admob_native_advance_id,
                        admob_native_advance_video_id: req.body.admob_native_advance_video_id,
                        admob_native_display_type: req.body.admob_native_display_type,
                        items_beetween_banner_ads: req.body.items_beetween_banner_ads,
                        items_between_interstitial_ads: req.body.items_between_interstitial_ads,
                        ads_status: req.body.ads_status,
                        message: req.body.message

                    })

                    await data.save();

                } else {

                    OriginalData[0].App = req.body.App;
                    OriginalData[0].status = req.body.status;
                    OriginalData[0].app_id = req.body.app_id;
                    OriginalData[0].fb_rewarded_id = req.body.fb_rewarded_id;
                    OriginalData[0].fb_rewarded_display_type = req.body.fb_rewarded_display_type;
                    OriginalData[0].fb_banner_id = req.body.fb_banner_id;
                    OriginalData[0].fb_banner_display_type = req.body.fb_banner_display_type;
                    OriginalData[0].fb_interstitial_id = req.body.fb_interstitial_id;
                    OriginalData[0].fb_interstitial_display_type = req.body.fb_interstitial_display_type;
                    OriginalData[0].fb_native_id = req.body.fb_native_id;
                    OriginalData[0].fb_native_banner_id = req.body.fb_native_banner_id;
                    OriginalData[0].fb_native_display_type = req.body.fb_native_display_type;
                    OriginalData[0].admob_rewarded_display_type = req.body.admob_rewarded_display_type;
                    OriginalData[0].admob_publisher_id = req.body.admob_publisher_id;
                    OriginalData[0].admob_app_id = req.body.admob_app_id;
                    OriginalData[0].admob_rewarded_id = req.body.admob_rewarded_id;
                    OriginalData[0].admob_interstitial_video_id = req.body.admob_interstitial_video_id;
                    OriginalData[0].admob_banner_id = req.body.admob_banner_id;
                    OriginalData[0].admob_medium_ractangle_id = req.body.admob_medium_ractangle_id;
                    OriginalData[0].admob_banner_display_type = req.body.admob_banner_display_type;
                    OriginalData[0].admob_interstitial_id = req.body.admob_interstitial_id;
                    OriginalData[0].admob_rewarded_interstitial_id = req.body.admob_rewarded_interstitial_id;
                    OriginalData[0].admob_interstitial_dislpay_type = req.body.admob_interstitial_dislpay_type;
                    OriginalData[0].admob_native_id = req.body.admob_native_id;
                    OriginalData[0].admob_native_advance_id = req.body.admob_native_advance_id;
                    OriginalData[0].admob_native_advance_video_id = req.body.admob_native_advance_video_id;
                    OriginalData[0].admob_native_display_type = req.body.admob_native_display_type;
                    OriginalData[0].items_beetween_banner_ads = req.body.items_beetween_banner_ads;
                    OriginalData[0].items_between_interstitial_ads = req.body.items_between_interstitial_ads;
                    OriginalData[0].ads_status = req.body.ads_status;
                    OriginalData[0].message = req.body.message;

                    OriginalData[0].save();

                }

                res.send("data uploaded");

            } else {
                res.send("You cannot change Appname");
            }

        } catch (err) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors": [{
                    "message": "Something went wrong!",
                    "code": HTTP.INTERNAL_SERVER_ERROR
                }
                ]
            })

        }

    }

    static c = async (req, res) => {

        try {

            var OriginalData = await Todo.find({ App: req.params.id });

            if (OriginalData.length == 0) {

                var OriginalData = {
                    "_id": "",
                    "App": "",
                    "status": "",
                    "_id": "",
                    "app_id": "",
                    "fb_rewarded_id": "",
                    "fb_rewarded_display_type": "",
                    "fb_banner_id": "",
                    "fb_banner_display_type": "",
                    "fb_interstitial_id": "",
                    "fb_interstitial_display_type": "",
                    "fb_native_id": "",
                    "fb_native_banner_id": "",
                    "fb_native_display_type": "",
                    "admob_rewarded_display_type": "",
                    "admob_publisher_id": "",
                    "admob_app_id": "",
                    "admob_rewarded_id": "",
                    "admob_interstitial_video_id": "",
                    "admob_banner_id": "",
                    "admob_medium_ractangle_id": "",
                    "admob_banner_display_type": "",
                    "admob_interstitial_id": "",
                    "admob_rewarded_interstitial_id": "",
                    "admob_interstitial_dislpay_type": "",
                    "admob_native_id": "",
                    "admob_native_advance_id": "",
                    "admob_native_advance_video_id": "",
                    "admob_native_display_type": "",
                    "items_beetween_banner_ads": "",
                    "items_between_interstitial_ads": "",
                    "ads_status": "",
                    "message": ""
                }

            } else {

                var OriginalData = await OriginalData[0];

            }

            res.send(OriginalData);

        } catch (e) {

            console.log(err);
            return res.status(HTTP.SUCCESS).send({
                "errors": [{
                    "message": "Something went wrong!",
                    "code": HTTP.INTERNAL_SERVER_ERROR
                }
                ]
            })

        }

    }

}

module.exports = { class1 };
