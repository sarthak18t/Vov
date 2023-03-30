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

module.exports = router;