const express = require("express");
const deleteData_api = require("../controllers/deletedata_cont");
const router = express.Router();

router.put("/", async (req, res) => {
  try {
    console.log(req.query);
    const deleteres = await deleteData_api.deleteData(req.query);

    res.status(200).json({
      message: "Data Deleted succesfully",
      acknowledged: deleteres.acknowledged,
      deleteCount: deleteres.deletedCount,
    });
  } catch (err) {
    res.status(400).json({
      message: "Delete failed",
      error: err,
    });
  }
});
module.exports = router;
