const express = require('express')
const router = new express.Router();
const cors = require('cors');
const admin = require('../model/admin');
const player = require('../model/player');
const auth = require('../Auth/adminauth')
router.use(cors());

router.get('/view/players',auth,async (req,res)=>{
    try {
        let players = await player.find({},'name email');
        if(players){
        res.status(200).send(players);
        }
        else
        res.status(400).send({"error":"No players found"})
        
    } catch (error) {
        console.log(error)
        res.status(400).send({"error":"Something went wrong"})
    }
})

router.get('/view/players/:uid',auth,(req,res)=>{
    let uid = req.params.uid;
    player.findById(uid,'name email gender height weight')
    .then((v)=>{
        if(v)
        res.send(v);
        else
        res.status(400).send({"error":"Player fetch failed"});
    })
    .catch((err)=>{
        res.status(400).send({"error":"Player fetch failed1"});
    })

})

module.exports = router;