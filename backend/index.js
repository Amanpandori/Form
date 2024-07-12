const express = require('express');
const app = express();


require('dotenv').config();


const PORT = process.env.PORT || 5500 



app.listen(4000,()=>console.log("server is connected"))