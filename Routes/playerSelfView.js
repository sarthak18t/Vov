const express = require('express')
const router = new express.Router();
const cors = require('cors');
const admin = require('../model/admin');
const player = require('../model/player');
const cmatch = require('../model/Cricket/match');
const fmatch = require('../model/Football/fmatch')
const bmatch = require('../model/Badminton/match');
const tmatch = require('../model/Table tennis/match');
const auth = require('../Auth/playerauth')
router.use(cors());



router.get('/self/players/badminton',auth,(req,res)=>{
    let uid = req.id;
    bmatch.find({pid:uid},'tot s1 s2 oname wt')
    .then((v)=>{
        console.log(v)
        if(v)
        res.send(v);
        else
        res.status(400).send({"error":"Badminton fetch failed"});
    })
    .catch((err)=>{
        res.status(400).send({"error":"Badminton fetch failed1"});
    })

})

router.get('/self/players/tt',auth,(req,res)=>{
    let uid = req.id;
    tmatch.find({pid:uid},'tot s1 s2 oname wt')
    .then((v)=>{
        console.log(v)
        if(v)
        res.send(v);
        else
        res.status(400).send({"error":"TT fetch failed"});
    })
    .catch((err)=>{
        res.status(400).send({"error":"TT fetch failed1"});
    })

})

router.get('/self/players/football',auth,(req,res)=>{
    let uid = req.id;
    fmatch.find({pid:uid},'tot t1 t2 s1 s2 wt goal')
    .then((v)=>{
        if(v)
        res.send(v);
        else
        res.status(400).send({"error":"Football fetch failed"});
    })
    .catch((err)=>{
        res.status(400).send({"error":"football fetch failed1"});
    })

})

router.get('/self/players/cricket',auth,(req,res)=>{
    let uid = req.id;
    cmatch.find({pid:uid},'tot t1 t2 s1 s2 wt run wicket')
    .then((v)=>{
        if(v)
        res.send(v);
        else
        res.status(400).send({"error":"Cricket fetch failed"});
    })
    .catch((err)=>{
        res.status(400).send({"error":"Cricket fetch failed1"});
    })

})

module.exports = router;