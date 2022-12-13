const express = require("express");
const postSave_api = require("../controllers/postsave_cont");
const router = express.Router();
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const postSave_res = await postSave_api.postSave(req.body);
    res.status(200).json({
      message: "Data Saved succesfully",
      id: postSave_res._id,
    });
  } catch (err) {
    res(400).json({
      message: "Save failed",
      error: err,
    });
  }
});

module.exports = router;
