const {Schema ,model}=require ('mongoose')

const productSchema = new Schema({
    id: String ,
    title: String,
    price: Number
})
const Product=model('products',productSchema);
module.exports= Product