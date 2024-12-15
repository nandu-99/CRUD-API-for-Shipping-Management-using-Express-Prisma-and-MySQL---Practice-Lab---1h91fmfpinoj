const verifySecretMiddleware = (req, res, next)=>{
    const {shipping_secret_key} = req.headers; 
    const valid = "a1b2c3d4e5f67890123456789abcdef"
    if(!shipping_secret_key){
        return res.status(403).json({ 
            "error": "SHIPPING_SECRET_KEY is missing or invalid"
         })
    }
    if(shipping_secret_key!=valid){
        return res.status(403).json({ 
            "error": "Failed to authenticate SHIPPING_SECRET_KEY"
         })
    }
    next()
}

module.exports = verifySecretMiddleware;
