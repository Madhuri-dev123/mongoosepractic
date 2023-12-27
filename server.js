var Product=require('./Product.model');
var Student=require("./Student.model")
var express = require("express");
var bodyParser=require("body-parser")
var app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.get("/students",function(req,res){
    var x = Student.find().then(function(data){
            console.log(data)
    res.json(data)
    }).catch(function(err){
        console.log(err)
    })
    // console.log(x);
    // res.send("comeing")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/addPro.html")
})
app.post("/addProduct",function(req,res){
    console.log(req.body)

    var newProduct = new Product(req.body)
    newProduct.save();
    console.log(newProduct)
    res.send("please wait")
})



app.listen(3700,function(){console.log("running on 3700")})