const express = require('express')
const router = new express.Router();
const player = require('../model/player');
const admin = require('../model/admin');
const bmatch = require('../model/Badminton/match');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const auth = require('../Auth/playerauth')
dotenv.config();


router.post('/player/badminton/addmatch',auth,(req,res)=>{
    console.log("Add badminton Match");
    let match = {
        tot: req.body.tot,
        pid: req.id,
        oname: req.body.oname,
        s1: req.body.s1,
        s2: req.body.s2,
        wt: req.body.wt,
    }
    match = new bmatch(match);
    match.save()
    .then((v)=>{
                if(v)
                res.status(200).send({"message":"BMatch Set"});
                else
                res.status(400).send({"error":"BMatch set failed"})
        
    })
    .catch((err)=>{
        res.send({"error":"BMatch set failed"})
    })
})

module.exports = router;