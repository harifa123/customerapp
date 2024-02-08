const express = require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const customerRoute=require("./controller/customerRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://harifa123:harifa123@cluster0.j6vqcp5.mongodb.net/customerDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/customer",customerRoute)

app.listen(3001,()=>{
    console.log("server running")

})