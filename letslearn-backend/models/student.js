const mongoose =require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        },
        key:
        {
            type:String,
            required:true
        },
        quizScore:
        {
            type:Number
        }
        
    }
)
var  studentlogin=mongoose.model('students',studentSchema)
module.exports=studentlogin;