const express = require("express");
const router = express.Router();

const Podcast = require ('../models/Podcast.model')

router.post ('/podcast', (req, res) => {
    console.log(req.body);
    Podcast.create(req.body)
    .then((podcastcreated)=>{
         res.json(podcastcreated);
    }).catch((err)=>console.log(err))
 })
 
 router.get('/podcast', async (req,res)=>{
     try{
         const podcast = await Podcast.find();
         res.json(podcast)
     }catch(err){
         console.log(err)
     }
 })
 

 module.exports = router;