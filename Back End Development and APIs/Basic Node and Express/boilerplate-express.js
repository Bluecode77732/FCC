let express = require('express');
let app = express();
let bodyParser = require("body-parser");  /* 11# - Use body-parser to Parse POST Requests */


/* console.log("Hello World"); */


/* app.get("/", function (req, res) {
  res.send('Hello Express');
}); 
*/

/* app.get("/", (req, res) => {
  res.send('Hello Express');
}); */


/* app.get("/", (req, res) => {
  __absolutePath = __dirname + '/views/index.html'; 
  res.sendFile(__dirname + "/views/index.html");  
}); */


/* 4# - Serve Static Assets */

app.use("/public", express.static(__dirname + "/public"));


/* 11# - Use body-parser to Parse POST Requests */

app.use(bodyParser.urlencoded({ extended: false }));


/* 7# - Implement a Root-Level Request Logger Middleware : Note: Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them. */

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});


/* 5# - Serve JSON on a Specific Route */

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});


/* Use the .env File */
/* app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({
    "message": message
  });
}); */


/* 6# - Use the .env File */

app.get("/json", (req, res) => {
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});


/* 8# - Chain Middleware to Create a Time Server */

app.get("/now", function (req, res, next) {
  req.time = new Date().toString()  // Hypothetical synchronous operation
  next();
}, function (req, res) {
  res.json({ "time": req.now });
});


/* 9# - Get Route Parameter Input from the Client */

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});


/* 10# - Get Query Parameter Input from the Client */

app.get("/name", function (req, res) {
  res.json({ name: req.query.first + " " + req.query.last });
});


/* 12# - Get Data from POST Requests */











module.exports = app;
