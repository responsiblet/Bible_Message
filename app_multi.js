var fs = require('fs');
var obj;




fs.readFile('kjv_bible.json', 'utf8', function (err, data) {
  if (err) throw err;
  kjv_bible = JSON.parse(data);
  
  
  
});
var accountSid = 'AC2076b5f5748e46a5846e760645568f9a';
var authToken = 'd3495282e5e94a57549ed38b3000bde8';
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken); 

var express = require("express");
var app = express();

app.get('/',function(request,response){
  var rand;
var book = 0;
var chapter = 0;
var verse = 0;
var text = "";
var bookName = "";
var verseNumber = 0;
var bibleVersePk = 0;
var bibleChapterPk = 0;
var bibleBookPk = 0;
var bibleBookNumber = 0;
var bibleChapterNumber = 0;
var bibleVerseText = "";
var bibleMessage = "";
var getMessage = function getBibleMesssage(){
        return bibleMessage;
    }
function randomize(){
    return Math.floor((Math.random() * 31102) + 1);
  }
    for (var i = 0; i<kjv_bible.length; i++){
  if(kjv_bible[i].model==="bible.verse" && kjv_bible[i].pk === randomize() ){
    //document.write("rand is: " + rand);
    verseNumber = kjv_bible[i].fields.number;
    chapter = kjv_bible[i].fields.chapter;
    //document.write("chapter sequential is: " + chapter);
    //document.write("verseNumber is : "+verseNumber+" - ");
    bibleVerseText = kjv_bible[i].fields.text;
    //document.write("bible verse text: " + kjv_bible[i].fields.text);
    //console.log("got here");
  }
}

for (var i = 0; i<kjv_bible.length; i++){
  if(kjv_bible[i].model==="bible.chapter" && kjv_bible[i].pk===chapter){
    bibleBookNumber = kjv_bible[i].fields.book;
    //document.write("book number is: " + bibleBookNumber);
    bibleChapterNumber = kjv_bible[i].fields.number;
    //document.write("bibleChapterNumber is "+bibleChapterNumber);
    //console.log("got here");
  }
}
for (var i = 0; i<kjv_bible.length; i++){
  if(kjv_bible[i].model==="bible.book" && kjv_bible[i].pk===bibleBookNumber){
    bookName = kjv_bible[i].fields.name;
    //document.write("bookName is: "+ bookName);
    //print out the Bible verse with Book, Chapter, Verse Number, and Verse Text:
    //console.log(bibleVerseText + " - " + bookName + " " + bibleChapterNumber + ":" + verseNumber );
    //console.log("got here");
    bibleMessage ='"'+ bibleVerseText + '"'+" - " + bookName + " " + bibleChapterNumber + ":" + verseNumber;
  }
}
    var to = '+12174918770';
    var tos = ['+12174918770','+12178837519', '+12174732371'];
    var from = '+12178826175';
    var body = getMessage();
    //console.log("bibleMessage is" + bibleVerseText + " - " + bookName + " " + bibleChapterNumber + ":" + verseNumber );
    //console.log("getMessage() returns: " + getMessage() ) ;
    
    //console.log("bibleMessage is" + bibleVerseText + " - " + bookName + " " + bibleChapterNumber + ":" + verseNumber );
    console.log("getMessage() returns: " + getMessage() ) ;
    
    for(var i = 0; i<3; i++){
	    client.messages.create({
	        to: tos[i],
	        from: from,
	        body: body,
	    }, function (err, message) {
	        console.log("message sent");
	        
	    });
	}

    
});
app.listen(8080); 
/*var request = require("request");

request("http://localhost:5001", function(error, response, body) {
  console.log(body);
});*/
