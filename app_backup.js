var twilio = require("twilio");
var accountSid = 'AC2076b5f5748e46a5846e760645568f9a';
var authToken = 'd3495282e5e94a57549ed38b3000bde8';
var client = new twilio.RestClient(accountSid, authToken); 
client.messages.create({ 
    body: 'Greetings earthling, this is the TwilioSmsBot ;)', 
    to: '+12174918770',  // Number that receives the SMS 
    from: '+12178826175' // Purchased Twilio number that send the SMS 
}, 
function(err, message) { 
    console.log(message.sid); 
}); 