# razorpay
This project implements RazorPay Payment Gateway's 2 step process in NodeJS

In the first step, the client application(Web, Android or IOS) initiates a transaction request to the razor pay. Once the razor pay sends a request, the client application now calls the internal API to capture the request. This is the step 2 of the process. The backend API confirms the transaction by capturing the payment using the razorpay framework available.
