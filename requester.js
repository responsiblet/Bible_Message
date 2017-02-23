var request = require("request");
request("http://localhost:5001", function(error, response, body) {
  console.log(body);
});
function exit(){
	process.exit();
}

setTimeout(exit, 5000);