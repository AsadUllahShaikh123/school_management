import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import studentRoutes from './routes/student.js'

const app = express();

app.use(bodyParser.json({limit:'20mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}))

app.use(cors());
app.use('/students',studentRoutes)

const CONNECTION_URL =  'mongodb+srv://AsadUllah:AsadUllah0786@mern-practice.hoxmynm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

.then(()=> console.log('connected') )
.catch((error)=> console.log(error.message) )
app.listen(PORT,()=> 
  console.log(`Connection is Established and running on Port :${PORT}`)
)
