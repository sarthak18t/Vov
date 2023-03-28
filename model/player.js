const mongoose = require('mongoose');
const validator = require('validator');

const player = mongoose.model('player',{
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
            else{
                var ind=value.indexOf("@");
                var my_slice=value.slice(ind+1);
                if(!(my_slice==="iiitvadodara.ac.in")&&!(my_slice==="iiitv.ac.in")){   
                throw new Error('Invalid Email')
                }
            }
        }
    },
    password:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true,
        
        validate(value){
            if(!value=="male"||!value=="female"||!value=="other"){
                throw new Error('Invalid gender')
            }
        }

    },
    height:{
        type: Number,
        require: true
    },
    weight:{
        type: Number,
        require: true
    },
    tokens:[
        {
           token:{
            type: String
            }
        }
    ]

})
module.exports = player;