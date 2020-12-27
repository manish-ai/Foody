
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


//desc fetch all products
//route GET api/products
//accses Public
const getProducts =asyncHandler(async(req,res)=>{
    const pageSize = 100
    const page = Number(req.query.pageNumber)||1
    const keyword = req.query.keyword ? {
        name:{
            $regex : req.query.keyword,
            $options :'i'
        }
    }: {}
    const count =  await Product.countDocuments({...keyword})
    const products = await Product.find({...keyword}).limit(pageSize).skip(pageSize * (page-1))
    res.json({products, page,pages:Math.ceil(count/pageSize)})
})



//desc fetch single product
//route GET api/products/:id
//accses Public
const getProductById =asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})


//desc delete a product
//route DELETE api/products/:id
//accses PRIVATE/admin
const deleteProduct =asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        await product.remove()
        res.json({message : 'Product removed'})
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})


//desc create a product
//route POST api/products
//accses PRIVATE/admin
const createProduct =asyncHandler(async(req,res)=>{
   const product = new Product({
       name : ' ',
       price : 0,
       user : req.user._id,
       image : '/images/sample.jpg',
       restaurant: ' ',
       cuisine: ' ',
    //    countInStock : 0,
       numReviews : 0,
       description : ' ' 
   })

   const createdProduct = await product.save()
   res.status(201).json(createdProduct)

})


//desc update a product
//route PUT api/products/:ID
//accses PRIVATE/admin
const updateProduct =asyncHandler(async(req,res)=>{
    const {name, price , description , image , restaurant, cuisine , countInStock } =req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name 
        product.price = price 
        product.description = description 
        product.image = image 
        product.restaurant = restaurant
        product.cuisine = cuisine 
        // product.countInStock = countInStock 
         


        const updatedProduct = await product.save()
        res.json(updatedProduct)

    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
 
 })
 


//desc Create a new review
//route POST api/products/:id/reviews
//accses PRIVATE
const createProductReview =asyncHandler(async(req,res)=>{
    const {rating , comment } =req.body

    const product = await Product.findById(req.params.id)

    if(product){
        const alreadyReviewed = product.reviews.find(r => r.user.toString()=== req.user._id.toString())

        if(alreadyReviewed){
            res,status(400)
            throw new Error('Product already reviewed')
        }

        const review = {
            name : req.user.name,
            rating : Number(rating),
            comment,
            user : req.user._id
        }

        product.reviews.push(review)
        product.numReviews = product.reviews.length

        product.rating = product.reviews.reduce((acc,item)=> item.rating + acc,0)/product.reviews.length

        await product.save()
        res.status(201).json({message:'Review added'})
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
 
 })



//desc GET top rated products
//route GET api/products/top
//accses Public
const getTopProducts =asyncHandler(async(req,res)=>{
    const products = await Product.find({}).sort({rating:-1}).limit(3)
    res.json(products)
   
 

})

//desc GET filtered product by category
//route GET api/products/category
//accses Public
const getFilterProduct = asyncHandler(async(req,res)=>{
    const products = await Product.find({category:'Food'}).exec()
    res.json(products)
})
export {getProducts,getProductById, deleteProduct, createProduct,updateProduct,createProductReview,getTopProducts,getFilterProduct}