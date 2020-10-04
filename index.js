const express = require('express');
const server = express();
const bodyParser = require('body-parser');

//Mongoose Connection
const mongoose = require('mongoose');
const url='mongodb://127.0.0.1:27017/HospitalManagement';
mongoose.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

//login
let jwt = require('jsonwebtoken');
let middleware = require('./auth/middleware');
let handle = require('./auth/token_gen');
let handlers = new handle();
const route = require('./routes/api');
server.use(bodyParser.json());
server.post('/login', handlers.login);
server.use('/api',middleware.checkToken, route);

//error
server.use((err,req,res,next)=>{
    console.log("error",err);
    res.status(404).send("Dude, the page does not exist");
});


server.listen(3000, ()=>{
    console.log("Code is running properly...")
});