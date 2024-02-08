const mongoose=require("mongoose")
const customerschema=mongoose.Schema(
    {
        name:String,
        id:String,
        phone:String
    }
)

module.exports=mongoose.model("customer",customerschema)