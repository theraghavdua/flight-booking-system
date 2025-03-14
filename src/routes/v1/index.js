const express = require("express");
const router = express.Router();
const {InfoController} =require('../../controllers')

router.get("/info", InfoController.info);

module.exports = router;

//https://youtu.be/olvF02oHS5U?si=8JsdD3zIDgwQ6S4W&t=2817