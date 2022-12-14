const express = require("express");
const router = express.Router();
var bodyparser = require("body-parser");
var path = require("path");
var fileSystem = require("fs");

router.use(bodyparser.json());

router.get("/", async (req, response) => {
  try {
    var filePath = path.join(__dirname, "../../swagger.json");

    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    // fileSystem - creates stream and read it in chunk format.
    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
  } catch (err) {
    console.log("err", err);
    res.status(400).send(err);
  }
});

module.exports = router;
