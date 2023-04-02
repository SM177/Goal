const mongoose = require('mongoose');

const goalModel = mongoose.Schema({
    goals:{
        type:String,
        required :[true,'Please enter the field']
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('Goal',goalModel);