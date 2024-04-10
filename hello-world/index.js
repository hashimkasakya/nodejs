// Dependencies
const express = require('express');// for posting
const mongoose = require("mongoose"); // for mongodb
const path = require("path");// for pug


require("dotenv").config();

// Instantiations
const app=express();


// Configurations

mongoose.connect(process.env.DATABASE,{
 useNewUrlParser: true,
useUnifiedTopology: true,
});

mongoose.connection
.once("open", () => {
  console.log("Mongoose connection open");
})
 .on("error", err => {
  console.error(`Connection error: ${err.message}`);
});

app.set("view engine", "pug"); // setting the view engine pug
app.set("views", path.join(__dirname,"views")); //specify the directory where the views are found


// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/babyregister',(req,res) => {
  res.render('register_baby');
});

app.get('/', (req, res) => { // new
     res.send('Homepage! Hello world.');
});

 app.get('/about', (req, res) => { // new
    res.send('About page. Nice.');
});

// Query params
app.get('/students',(req,res) => {
  res.send("This is class" + req.query.class + "cohort " + req.query.cohort);
});

app.get('/babies',(req,res) => {
  res.send("This is a baby" + req.query.name + "age " + req.query.age);
});




// serving html files
app.get('/index',(req,res) => {
    res.sendFile(__dirname+"/index.html")
});

app.get('/registerbaby',(req,res) => {
  res.sendFile(__dirname+"/register_baby.html")
});

app.post('/registerbaby',(req,res) => {
  console.log(req.body)
  let baby=req.body
  res.json({message:'baby registered',baby})
});

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });

  // Always should be the last line in code
app.listen(3500, () => console.log('listening on port 3000'));//