const express=require("express")
const router=express.Router()
const costomerModel=require("../models/customerModel")

router.post("/customerentry",async(req,res)=>{

    let data=req.body
    let customer=new costomerModel(data)
    let result=await customer.save()

    res.json({status:"success"})

})

module.exports=router