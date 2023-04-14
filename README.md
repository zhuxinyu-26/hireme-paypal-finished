## ⚙ Installation Guide 
Please follow the steps to set up the starting project:
1. Create local project folder
2. Open a CMD and cd to this folder or open a VS code terminal at this location
3. $ git clone https://github.com/zhuxinyu-26/hireme-paypal
4. $ cd hireme-paypal
5. $ npm install
6. fill up .env with your own credentials 
7. nodemon hireme-paypal

## 🚀 Npm package installation
paypal-rest-sdk npm package:
https://www.npmjs.com/package/paypal-rest-sdk

Install: npm i paypal-rest-sdk

## 🔗 Required Links
1. [developer.paypal.com](https://developer.paypal.com)
2. [sandbox.paypal.com](https://www.sandbox.paypal.com)

## 📖 Documentation
needed documentation:
1. <a href="https://www.npmjs.com/package/paypal-rest-sdk" target="_blank">https://www.npmjs.com/package/paypal-rest-sdk</a>
2. <a href="https://github.com/paypal/PayPal-node-SDK/blob/master/samples/payment/execute.js" target="_blank">https://github.com/paypal/PayPal-node-SDK/blob/master/samples/payment/execute.js</a>

## 💬 Code Snippets

paypal-npm-inclass@personal.com

paypal-npm-inclass@business.com

password both Test1234

**.env**

NODE_ENV = 'production'

CONNECTION_STRING = 'mongodb+srv://zhuxinyu_26:Zxy970124@cluster0.6sozjjl.mongodb.net/hireme'

PASSPORT_SECRET = 'some-kind-of-string'

GOOGLE_CLIENT_ID = '475385508546-vrpsvje5j1vmd3u84nqjnkkjt2akbotb.apps.googleusercontent.com'

GOOGLE_CLIENT_SECRET = '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'

GOOGLE_CALLBACK_URL = 'http://localhost:3000/auth/google/callback'

PAYPAL_CLIENT_ID = 'Aa9HDBmWOGQ5yL5PuF_ncdXdZ_U4qr9tNIMNyDhnmrLhkSW0-G1m1Ok_NG9O378K7ViGhJTBUBR658fv'

PAYPAL_CLIENT_SECRET = 'EFmUDZ7oZu6Sw5d5x4DAXHQCCTnL3ytRFAHuH8G2ORPQeyXGnRsKCZ6WS-EOR2EaJlmiPZIqtWwNI2tH'

**⚠️IMPORTANT! get payerId and paymentId from the returned url**

const payerId = req.query.PayerID;

const paymentId=req.query.paymentId;

**return & cancel urls**

return_url: "http://localhost:3000/payment/success",
      cancel_url: "http://localhost:3000/payment/cancel",

**for loop -> get the approval_url**

for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === 'approval_url') {
              res.redirect(payment.links[i].href);
            }
          }

## ✉️ Reference
[Intro To The Node.js PayPal REST SDK](https://www.youtube.com/watch?v=7k03jobKGXM&t=1374s) by Traversy Media
