const {prisma} = require("../db/config")
const createShipping  = async(req, res)=>{
    const {userId, productId,count} = req.body; 
    if(!userId||!productId||!count){
        return  res.status(404).json({
            "error": "All fields required"
          })
    }
    const created = await prisma.shipping.create({data: {userId, productId, count}})
    return res.status(201).json(created)
}

const cancelShipping = async(req, res)=>{
    const {shippingId} = req.body; 
    if(!shippingId){
        return  res.status(404).json({
            "error": "Missing shippingId", 
          })
    }
    const updated = await prisma.shipping.update({where: {id:shippingId}, data: {status: "cancelled"}})
    return res.status(200).json(updated)
}

const getShipping = async(req, res)=>{
    const {userId} = req.query; 
    if(!userId){
        const shippings = await prisma.shipping.findMany()
        return res.status(200).json(shippings)
    }else{
        const ship = await prisma.shipping.findMany({where: {userId: userId}})
        return res.status(200).json(ship)
    }
}


module.exports = {createShipping, cancelShipping, getShipping}
