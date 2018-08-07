var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log("hostname: ",process.env.HOSTNAME);

    var resp = "hostname: " + process.env.HOSTNAME + ", version: v1\n";

    //res.send("hostname: "+ process.env.HOSTNAME);
    res.send(resp);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    console.log("version: v1");
});
