const express = require('express');
const router = express.Router();
const Hospital = require('../schemas/Hospitals');
const Ventilators = require('../schemas/Ventilators');

//list of Hospitals
router.get('/HospitalsList',(req,res,next)=>{
    Hospital.find().then((hospital)=>{
        res.send({query:"Hospitals List" ,msg:hospital})
    }).catch(next);
});

//list of Ventilators
router.get('/VentilatorsList',(req,res,next)=>{
    Ventilators.find().then((hospital)=>{
        res.send({type:'GET',query:"Ventilators List" ,msg:ventilators})
    }).catch(next);
});

//Adding Hospital
router.post('/Hospitals',(req,res,next)=>{
    Hospital.create(req.body).then((vent)=>{
        res.send({type:'POST',query:"Adding Hospital",msg:vent});
    }).catch(next);
});

//Adding Ventilator
router.post('/Ventilators',(req,res,next)=>{
    Ventilators.create(req.body).then((vent)=>{
        res.send({type:'POST',query:"Adding Ventilator",msg:vent});
    }).catch(next);
});

// Delete Ventilator by ID
router.delete('/Ventilator/:ventid',(req,res,next)=>{
    Ventilators.findOneAndRemove({ventilatorId:req.params.ventid}).then((vent)=>{
        res.send({type:'DELETE',query:"Deleting Ventilator by ID",vent:vent});
    }).catch(next);
});

//Search Ventilators by Status and Hospital name
router.get('/Ventilator/:status/:name',(req,res,next)=>{
    Ventilators.find({status:req.params.status,name:req.params.name}).then((ventilator)=>{
        res.send({type:'GET',query:"Searching for Ventilators by Status and Hospital Name",msg:ventilators});
    }).catch(next);
   
});

//Search Hospitals by Name
router.get('/Hospital/:name',(req,res,next)=>{
    Hospital.find({name:req.params.name}).then((hospital)=>{
        res.send({type:'GET',query:"Searching for Hospital by Name",msg:hospital});
    }).catch(next);
});

//Update Ventilators by ID
router.put('/Ventilator/:ventid',(req,res,next)=>{
    Ventilators.findOneAndUpdate({ventilatorId:req.params.ventid},req.body).then((vent)=>{
        res.send({type:'PUT',query:"Updating Ventilators by ID",msg:vent});
    }).catch(next);
    
});

module.exports = router;