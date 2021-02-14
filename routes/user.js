/** @format */

var express = require("express")
var router = express.Router()
var productHelpers=require('../helpers/product-helpers')


/* GET home page. */
router.get("/", function (req, res, next) {
  
  productHelpers.getAllProducts().then((products)=>{
    console.log(products)
    res.render('users/view-products',{user:true,products})
  })

})
router.get('/login',(req,res)=>{
  res.render('users/login')
})
router.get('/signup',(req,res)=>{
  res.render('users/signup')
})
router.post('/signup',(req,res)=>{

})

module.exports = router