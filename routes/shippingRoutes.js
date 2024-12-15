const express = require("express")
const router = express.Router()
const {createShipping, cancelShipping, getShipping} = require("../controllers/shippingController")
const verifySecretMiddleware = require("../middlewares/verifySecret")

router.post("/create", createShipping)
router.put("/cancel",verifySecretMiddleware, cancelShipping)
router.get("/get",verifySecretMiddleware, getShipping)

module.exports = router;
