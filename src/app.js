const express = require("express");
const app = express();
const path = require('path');
const hbs=require('hbs');
const { url } = require("inspector");
//hosting ke liye ye line use hui hai
const port=process.env.PORT||80;
// public path 
const static=path.join(__dirname,"../public")
console.log(path.join(__dirname,'../views'))
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'../templates/views'));
const partialPath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)
app.use(express.static(static));

// app.get("/",(req,res)=>{
//     res.send("my name is ishaan this is home page")
// })


// app.get("/about",(req,res)=>{
//     res.send("this is about page")
// })

// app.get("/weather",(req,res)=>{
//     res.send("this is weather page")
// })



app.get("/",(req,res)=>{
        res.render("index")
    })

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
        res.render("weather")
    })
app.get("*",(req,res)=>{
    res.render("404",{
        errmsg:"opps wrong url entered"
    })
})

app.listen(port,()=>{
    console.log(`"the application started" ${port}`)
})