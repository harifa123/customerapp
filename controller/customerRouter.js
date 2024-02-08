const express=require("express")
const router=express.Router()
const costomerModel=require("../models/customerModel")

router.post("/customerentry",async(req,res)=>{

    let data=req.body
    let customer=new costomerModel(data)
    let result=await customer.save()

    res.json({status:"success"})

})

router.get("/viewall",async(req,res)=>{
    let data=await costomerModel.find()

    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await costomerModel.find(input)

    res.json(data)
})

module.exports=router