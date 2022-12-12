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
    res.status(201).json({
      Message: "Data updated succesfully",
      output: update_res,
    });
  } catch (err) {
    res(400).send(err);
  }
});

module.exports = router;
