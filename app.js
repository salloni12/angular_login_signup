
var express=require('express');
var router=express.Router();
var MongoClient = require('mongodb').MongoClient;
//var user=require('./signin');

var mongoose=require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name:{ type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  //cpassword: { type: String, required: true }
  
});

var User =mongoose.model('User',userSchema);

router.get('/users',function(req,res){
  User.find(function(err,users){
    res.json(users);
  })
});
router.post('/user',function(req,res,next){
  console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
   
   let newuser=new User({
    name:req.body.name,
     email:req.body.email,
     password:req.body.password,
    //cpassword:req.body.cpassword
   });
   newuser.save(function(err,users){
    if(err)
     {
       res.json({success:false,
         msg:'failed to add users'});
     }
     else{
       res.json({success:true,
         msg:'users added succssfully'});
     }
 
 });
  });
  router.post('/login',function(req,res,next){
    console.log(req.body.email);
    console.log(req.body.password);
   
   
   User.findOne({email:req.body.email,password:req.body.password},function(err,user){
    if(err)
     {
       res.json({success:false,
         msg:'failed to add users'});
     }
      if(user){
       res.json({success:true, 
         msg:'user succssfully login ',
        user:user});
     }
     else{
      res.json({success:false,
        msg:'failed to add users'});

     }
 
 });
  });
  router.post('/signup',function(req,res,next){
      User.findOne({email:req.body.email},function(err,user){
        if(err)
        {
          res.json({msg:'failed to add users'});
        }
        if(user){
          res.json({msg:'existing user'}); 
        
        }else{
         
        let user= new User({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
        });

        user.save(function(err,user){
          if(err)
            {
              console.log(err);
              res.json({success:false,
                msg:'failed to add users'});
            }
            else{
              res.json({success:true,
                msg:'users added succssfully'});
            }
        
        });
        }
 
 });
  });
  router.delete('/user/:id',function(req,res){
    User.remove({_id:req.params.id},function(err,result){

      if(err){
        res.json(err);
      }
      else{
        res.json(result);
      }
    })
  });
 

module.exports=router;


   