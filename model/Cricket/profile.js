const mongoose = require('mongoose');
const validator = require('validator');

const cprofile = mongoose.model('cprofile',{

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
module.exports = cprofile;