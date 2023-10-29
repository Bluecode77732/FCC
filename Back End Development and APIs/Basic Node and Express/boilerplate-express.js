let express = require('express');
let app = express();

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


/* 5# - Serve JSON on a Specific Route */

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});


/* Use the .env File */
app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({
    "message": message
  });
});


/* 6# - Use the .env File */

app.get("/json", (req, res) => {
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});


/* 7# - Implement a Root-Level Request Logger Middleware */


















module.exports = app;





















module.exports = app;
