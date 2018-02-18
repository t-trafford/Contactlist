const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// retriving contacts
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});
// Add contact
 //logic to add contact
 router.post('/contact',(req, res, next)=>{
    
    var newContact = new Contact({
        
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
        
    });
       

    newContact.save(function(err,Contact){
        if(err){
            console.log("Can't add contact: %s", err);
        }
        else{
            res.json({msg: 'contact added successfully'});
        }
    });

});
 
// delete contact
router.delete('/contact/:id', (req, res, next)=>{
   Contact.remove({_id: req.params.id}, function(err, result){
       if(err){
        res.json(err);
       }else{
        res.json(result);
       }
   });
});
 
module.exports = router;