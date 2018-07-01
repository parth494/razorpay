# razorpay
This project implements RazorPay Payment Gateway's 2 step process in NodeJS

In the first step, the client application(Web, Android or IOS) initiates a transaction request to the razor pay. Once the razor pay sends a response, the client application now calls the internal API to capture the request. This is the step 2 of the process. The backend API confirms the transaction by capturing the payment using the razorpay framework available on nodeJS

Steps to run the application
Step 1:
npm install

Step 2:
node index.js

Step 3: 
Click the "Pay with Razorpay" to initiate the transaction. Enter card/wallet details and submit

Step 4:
The backend API automatically confirms this transaction with razorpay
