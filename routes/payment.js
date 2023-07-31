const express = require("express");

const {
    paymentGateway, submitPayment
} = require("../controllers/paymentGatewayController");

const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get("/payment-gateway",protectRoute, paymentGateway );
router.post("/payment-gateway", protectRoute, submitPayment);


module.exports = router;