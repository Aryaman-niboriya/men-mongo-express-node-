var express = require('express');
var router = express.Router();
const userModel = require("./users")
/* GET home page. */
router.get('/', function(req, res, next) { 
  req.session.name = "Aryaman";
  res.render('index', { title: 'Express' });
});
router.get("/ ", function (req,res){
  if (req.session.name==="Aryaman"){
    res.send(`your name is right Arya*****man:${req.session.name}`)
  }
  
;})

router.get("/createuser", async function (req,res){
 let userdata  = await userModel.create({
    name  : "dhruvi",
 nickname : "jhatuuuuu",
 description: "he is intresend more into lgbtq community ",
  categories: ["lessbian","gay","transgender","queen"]

  })
  res.send(userdata)
})
router.get("/finduser", async function (req,res){
    var regex  = new RegExp("^dhruvi$" , "i")
  let user = await userModel.find({name:regex})
  res.send(user)
})

//create user
/*router.get("/create", async function (req,res){
  const createuser = await userModel.create({
    name  : "Aryaman",
  email : "aryamanniboriya94@gmail.com",
  phone : 7999775413 
  })
  res.send(createuser);
})*/



//read user
/*router.get("/read", async function (req,res){
  const allusers = await userModel.find();
  res.send(allusers);
})

//delete user
router.get("/delete", async function (req,res){
    let deleteduser = await userModel.findOneAndDelete({name  : "Aryaman"})
    res.send(deleteduser)
})*/



module.exports = router; 

   