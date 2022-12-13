const express = require("express");
const getSave_api = require("../controllers/getsave_cont");
const router = express.Router();
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.get("/", async (req, res) => {
  try {
    console.log(req.query);
    const getSave_res = await getSave_api.getSave(req.query);
    res.status(200).json({
      message: "Data Saved succesfully",
      output: getSave_res,
    });
  } catch (err) {
    res(400).json({
      message: "Save failed",
      error: err,
    });
  }
});

module.exports = router;
