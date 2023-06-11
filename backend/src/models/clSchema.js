const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const clSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String, 
        required:true,
        unique: true
    },
    mobileNumber:{
        type: Number,
        required: true,
        unique: true
    }, 
    password:{
        type: String, 
        required:true,
    }
})

//middleware to encrypt password

clSchema.pre("save", async function(next){

    if(this.isModified("password")){ 
        this.password = await bcrypt.hash(this.password, 10)
        //password is only hashed when password field is modified or newly entered
    }
    next()

})


const ClSchema = new mongoose.model("contingentleaders", clSchema)

module.exports = ClSchema