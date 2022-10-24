import express from 'express'

const routes = express.Router();

routes.get('/',(req,res)=>{
  res.send('Routing is working fine at my side')
})