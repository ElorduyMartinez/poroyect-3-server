const express = require("express");
const router = express.Router();

const Series = require("../models/Series.model");

router.post ('/serie', (req, res) => {
   console.log(req.body);
   Series.create(req.body)
   .then((seriescreated)=>{
        res.json(seriescreated);
   }).catch((err)=>console.log(err))
})

router.get('/serie', async (req,res)=>{
    try{
        const series = await Series.find();
        res.json(series)
    }catch(err){
        console.log(err)
    }
})


module.exports = router;