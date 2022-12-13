const express = require("express");
const update_api = require("../controllers/updatedate_cont");
const router = express.Router();
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.put("/", async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.query);
    const update_res = await update_api.updateData(req.query, req.body);
    res.status(200).json({
      Message: "Data updated succesfully",
      acknowledged: update_res.acknowledged,
      modifiedCount: update_res.modifiedCount,
      upsertedId: update_res.upsertedId,
      upsertedCount: update_res.upsertedCount,
      matchedCount: update_res.matchedCount,
    });
  } catch (err) {
    res(400).json({
      message: "Update failed",
      error: err,
    });
  }
});

module.exports = router;
