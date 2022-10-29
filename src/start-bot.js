// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACe9225491e4b975a9c927c8a85fbee829";
const authToken = "a81615439c49a3a280d9aad3b6a5fab9";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     from: 'whatsapp:+1415238886',
     body: 'Hi, Joe! Thanks for placing an order with us. We’ll let you know once your order has been processed and delivered. Your order number is O12235234',
     to: 'whatsapp:+27727237808'
   })
  .then(message => console.log(message.sid));
