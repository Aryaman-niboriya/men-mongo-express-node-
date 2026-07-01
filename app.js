const express = require("express")

const app = express()

app.set("view engine", "ejs"); 

/*app.use(function (req,res,next){
    console.log("middle ware working")
  next();
})*/
app.use(express.static("./public"))

app.get('/',function (req, res) {
    res.render ("index",{title:"aryaman is the king of this small world"});
})

app.get('/about',function (req, res) {
    res.render ("about");
})

app.get('/help',function (req, res) {
    res.render ("help");
})

app.get('/contact',function (req, res) {
    res.render ("contact");
})


  
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
