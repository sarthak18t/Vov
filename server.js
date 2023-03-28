const express = require('express');
const app =express();
const dotenv = require('dotenv');
dotenv.config();
require('./Db/mongoose')
const bdp = require('body-parser');
const port = process.env.PORT||3000;
const admin = require('./model/admin');
const player = require('./model/player');
const addi = require('./Routes/admini');
const playeri = require('./Routes/playeri')
const { default: mongoose } = require('mongoose');
const fire = require('./Db/mongoose');




app.use(express.json());
app.use((req,res,next)=>{
    if(mongoose.connection.readyState==2||mongoose.connection.readyState==0){
    fire();
    res.status(400).send({"message":"db is down"});
    }
    else
    next();
})
app.use(playeri);
app.use(addi);

app.listen(port,()=>{
    fire();
    console.log("app is running at "+port);
})

