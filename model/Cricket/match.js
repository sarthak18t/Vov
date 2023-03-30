const mongoose = require('mongoose');
const validator = require('validator');

const cmatch = mongoose.model('cmatch',{
    tot:{
        //type of tournament
        type: String,
        required:true
    },
    t1:{
        // team1
        type: String,
        required:true,
        trim: true,
    },
    t2:{
        //team2
        type: String,
        required: true
    },
    s1:{
        type: String,
        required: true,
        default: "0/0"
    },
    s2:{
        type: String,
        required: true,
        default: "0/0"
    },
    wt:{
        //winning team
        type: String,
        required: true,
    },
    pid:{
        //player id
        type: String,
        required: true
    },
    run:{
        //runs made by pid
        type: Number,
        required: true,
        default: 0
    },
    wicket:{
        //wickets taken by pid
        type: Number,
        default: 0,
        required: true
    }


})
module.exports = cmatch;