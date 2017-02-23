var fs = require('fs');
var obj = '';
fs.readFile('kjv_bible.json', 'utf8', function (err, data) {
  if (err) throw err;
  kjv_bible = JSON.parse(data);
  
  var rand = Math.floor((Math.random() * 31102) + 1);
  for (var i = 0; i<kjv_bible.length; i++){
    if(kjv_bible[i].model==="bible.verse" && kjv_bible[i].pk === rand){
            console.log(kjv_bible[i].fields.text);
            obj = kjv_bible[i].fields.text;
            //console.log(typeof(obj));
    }
  }
});
var stuff = obj;
var twilio = require("twilio");
var accountSid = 'AC2076b5f5748e46a5846e760645568f9a';
var authToken = 'd3495282e5e94a57549ed38b3000bde8';
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({ 
    body: "a"+obj.toString()+"c", 
    to: '+12174918770',  // Number that receives the SMS 
    from: '+12178826175' // Purchased Twilio number that send the SMS 
}, 
function(err, message) { 
    console.log(message.sid); 
}); 