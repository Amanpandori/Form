const express = require('express');
const cors = require('cors')
const app = express();


const UserModel = require('../backend/Models/User');



app.use(express.json())
app.use(cors())


require('dotenv').config();



const PORT = process.env.PORT || 5500 



app.post('/signup',(req,res)=>{

                const {firstName,lastName,email,phoneNumber,country,state,city,address,zip,message}   = req.body;
                // console.log(firstName,lastName,email,number,country,state,city,address,message)

                const userModel = new UserModel({firstName,lastName,email,phoneNumber,country,state,city,address,zip,message})
                console.log(userModel)

                   userModel.save()
    res.send("hello")
})


app.listen(4000,()=>console.log("server is connected"))