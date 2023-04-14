const express = require("express");
const router = express.Router();

// STEP 1c - import the PayPal REST SDK
const paypal = require('paypal-rest-sdk');
/* GET /payment/index page. */
router.get("/", (req, res) => {
  res.render("payment/index", { title: "Payment", user: req.user });
});
/* GET: /payment/successed => show payment confirmed */
router.get("/successed", (req, res) => {
    res.render("payment/successed", {
      title: "Payment Successed",
      user: req.user,
    });
  });
/* GET: /payment/cancelled */
  router.get("/cancelled", (req, res) => {
    res.render("payment/cancelled", {
      title: "Payment Cancelled",
      user: req.user,
    });
  });


// STEP 4a - create a /pay route that the form is getting submitted to
router.post('/pay',(req,res)=>{
  // STEP 4b - create(paste) a json object and make adjustment
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
      return_url: "http://localhost:3000/payment/success", 
      cancel_url: "http://localhost:3000/payment/cancel",
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "hireme pro",
                "sku": "001",
                "price": "10.00",
                "currency": "CAD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "CAD",
            "total": "10.00"
        },
        "description": "This is the hireme pro."
    }]
};
  // STEP 4c - pass it in the paypal.payment.create
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        // console.log("Create Payment Response");
        // console.log(payment);
        // res.send('test');
        for (let i = 0; i < payment.links.length; i++) { 
          if (payment.links[i].rel === 'approval_url') { 
            res.redirect(payment.links[i].href); 
          } }
    }
});
      // res.send('test');
      
      // get the approval_url from the PAYMENT

    })
// STEP 5a - create route for /success
router.get('/success',(req,res)=>{


  // STEP 5b - get params from the link
const payerId = req.query.PayerID;
const paymentId = req.query.paymentId;
  // STEP 5c - create(paste) execute object
  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "CAD",
            "total": "10.00"
        }
    }]
};
    // change the payer_id
    // change transaction info
   

  // STEP 5d - paypal.payment.execute
  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
        res.redirect("/payment/successed");
    }
});
      // res.redirect("/payment/successed");
    })
// STEP 6 - GET /cancel 
router.get('/cancel',(req,res)=>{
  res.redirect("/payment/cancelled");
})
    // res.redirect("/payment/cancelled");

module.exports = router;
