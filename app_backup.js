var twilio = require("twilio");
var accountSid = '';
var authToken = '';
var client = new twilio.RestClient(accountSid, authToken); 
client.messages.create({ 
    body: 'Greetings earthling, this is the TwilioSmsBot ;)', 
    to: '+123456789',  // Number that receives the SMS 
    from: '+123456789' // Purchased Twilio number that send the SMS 
}, 
function(err, message) { 
    console.log(message.sid); 
}); 
