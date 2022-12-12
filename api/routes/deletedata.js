const express = require("express");
const deleteData_api = require("../controllers/deletedata_cont");
const router = express.Router();

router.put("/", async (req, res) => {
  try {
    console.log(req.query);
    const deleteres = await deleteData_api.deleteData(req.query);
    if (deleteres)
      res.status(201).json({
        message: "Data Deleted succesfully",
        output: deleteres,
      });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
});
module.exports = router;
