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


/* app.use("/public", express.static(__dirname + "/public")); */


/* Serve JSON on a Specific Route */
/* app.get("/json", (req, res) => {
  res.json({
    "message": "Hello json"
  });
});
*/

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






















module.exports = app;
