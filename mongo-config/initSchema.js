import mongoose from "mongoose"

let Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    age: Number
})

export let userModel=mongoose.model('user',userSchema)

