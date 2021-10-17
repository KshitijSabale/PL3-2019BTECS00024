const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/Portfolio'));
app.use(express.static(__dirname + '/PL3_5A'));
app.use(express.static(__dirname + '/PL3_5B'));
app.use(express.static(__dirname + '/aboutPage'));
app.use(express.static(__dirname + '/vishal'));

app.listen('3002',()=>{
    console.log(`listening at port 3002`);
});
console.log('working on 3002');