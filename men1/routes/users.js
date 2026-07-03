const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/men")

  const userSchema  = mongoose.Schema({
   name  : String,
 nickname : String,
 description:String ,
  categories: {
    type:Array,
    default:[]
  },  
  datecreated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("user", userSchema)

//module.exports = User