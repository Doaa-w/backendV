const Product = require("../model/productSchema")

const getAllProducts=async (req,res)=>{
    try {
        const products= await Product.find()
        console.log(products)
        return res.send({message: 'all th product' , payload: products})
    } catch (error) {
        res.state(500).send("some error")
    }
}

module.exports={getAllProducts}