"use strict"

var path = require("path");
var express = require("express");

var https = require("https");
var fs = require("fs");

var app = express();



var caBundle = fs.readFileSync("../../charleslp_info.ca-bundle");
var clavePrivada = fs.readFileSync("../../clave_charleslp_info.key");
var certificado = fs.readFileSync("../../charleslp_info.crt");

var servidor = https.createServer({ ca: caBundle, key: clavePrivada, cert: certificado }, app);


app.use(express.static(path.join(__dirname, "/")));



app.get("/", function(request, response) {

	response.redirect("index.html");
});


servidor.listen(3010, function() {
    console.log("Servidor arrancado en el puerto 3010");
});
