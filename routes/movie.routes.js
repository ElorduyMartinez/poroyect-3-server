const express = require("express");
const router = express.Router();

const Movie = require("../models/Movies.model");

router.post ('/movie', (req, res) => {
   console.log(req.body);
   Movie.create(req.body)
   .then((MovieCreator)=>{
        res.json(MovieCreator);
   }).catch((err)=>console.log(err))
})

router.get('/movie', async (req,res)=>{
    try{
        const movies = await Movie.find();
        res.json(movies)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;


