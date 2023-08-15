const mongoose =require('mongoose')

const messageschema=new mongoose.Schema(
    {
        message:
        {
            type:String,
            required:true
        },
        sendby:
        {
            type:String,
            required:true
        },
        date:
        {
            type:String,
            required:true
        }
    }
)
module.exports=Messages=mongoose.model('message',messageschema)