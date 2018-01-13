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
var accountSid = '';
var authToken = '';
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({ 
    body: "a"+obj.toString()+"c", 
    to: '+123456789',  // Number that receives the SMS 
    from: '+123456789' // Purchased Twilio number that send the SMS 
}, 
function(err, message) { 
    console.log(message.sid); 
}); 
