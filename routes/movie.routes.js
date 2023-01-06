const express = require("express");
const router = express.Router();

const Movie = require("../models/Movies.model");

router.post ('/Movies', (req, res, next) => {
    const { title, gender, photo , description, moviecreator } = req.body;
    then.(createdMovie) =>{
        req
    }


}).catch((err) => next(err)); 


