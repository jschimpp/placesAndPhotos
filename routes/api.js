const express=require('express');
const Place=require('../models/place');

const router=express.Router();

router.get('/',(req,res)=>{
Place.find({ })
.then((data)=>{
    console.log("Data: ", data);
    res.json(data);
})
.catch((error)=>{
    console.log("Error: ", dataerror)
})
})

router.post('/', (req,res)=>{
    const data=req.body
    const newPlace=new Place(data)
    newPlace.save((error)=>{
        if (error) {
            console.log(error)
        } else {
            res.status(201).json(newPlace)
        }
    });
})

router.put('/:id',(req,res) => {
    Place.findByIdAndUpdate({
        _id : req.params.id
    },req.body,{
        new : true
    },(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

router.delete('/:id',(req,res) => {
    Place.findByIdAndDelete(req.params.id,(err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})

module.exports=router;