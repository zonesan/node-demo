var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log("hostname: ",process.env.HOSTNAME);
    
    var resp = "Hello ocean on a blue background.\n";
    resp += "hostname: " + process.env.HOSTNAME + ", version: v2\n";

    //res.send("hostname: "+ process.env.HOSTNAME);
    res.send(resp);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    console.log("version: v2");
});
