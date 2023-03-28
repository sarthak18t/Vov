const mongoose = require('mongoose');
const validator = require('validator');

const cmatch = mongoose.model('cmatch',{
    tot:{
        //type of tournament
        type: String,
        require:true
    },
    t1:{
        // team1
        type: String,
        require:true,
        trim: true,
    },
    t2:{
        //team2
        type: String,
        require: true
    },
    s1:{
        type: String,
        require: false,
        default: "0/0"
    },
    s2:{
        type: String,
        require: false,
        default: "0/0"
    },
    wt:{
        //winning team
        type: String,
        require: true,
    },
    pid:{
        //player id
        type: String,
        require: true
    },
    run:{
        //runs made by pid
        type: Number,
        require: true,
        default: 0
    },
    wicket:{
        //wickets taken by pid
        type: Number,
        default: 0,
        require: true
    }


})
module.exports = cmatch;