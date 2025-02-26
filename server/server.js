const express=require("express")
const cors=require("cors")
const userModel=require("./models/Post")

const PORT=8888
const app=express()
app.use(express.json())
app.use(cors())


app.get("/",(req,res) =>{
    console.log("sign-up Successfull")
})

app.post("/user",async(req,res) =>{
    try {
        const {username,email,password,dateOfBirth}=req.body
        if(!username){
                return res.json({"message":"Username cannot be empty"})
        }

        if(!email){
            return res.json({"message":"Email cannot be empty"})
        }

        if(!password || password.length<8||password.length>16){
            return res.json({"message":"the length should be greater than 8 and less than 16"})
        }

        res.status(201).json("snd succes")
        
    }catch (error) {
        console.log(error)
        res.send("Something went wrong,pls try again later")
    }


    
})



app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});







