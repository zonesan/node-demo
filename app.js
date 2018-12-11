var express = require('express');

var app = express();
var version = 'v1';
var count = 0;
const confFile = '/tmp/node-demo/demo.conf';
const logFile = "/tmp/test";

app.get('/', function (req, res) {
    console.log("hostname: ", process.env.HOSTNAME);



    //res.send("hostname: "+ process.env.HOSTNAME);

    const fs = require('fs');

    fs.readFile(logFile, 'utf-8', function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            console.log("data:", data);
            count = data.toString() - 0;
            console.log("count:", count);
            count++;
        }
        // res.send(resp);
    })
    fs.writeFile(logFile, count, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!" + count);
    });

    var resp = "hostname: " + process.env.HOSTNAME + ", version: " + version + ", count: " + count + "<br />\n";

    fs.readFile(confFile, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            console.log(data);
            resp += "config file content: " + data;
        }
        res.send(resp);
    });


});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    console.log("version: " + version);
});
