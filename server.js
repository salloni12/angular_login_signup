var express = require('express');
var app =express();
var router=require('./app');
var bodyParser=require('body-parser');

//mongodb connection 
var mongoose=require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/users');

//on connection
mongoose.connection.on('connected',()=>{
    console.log("connected to database @mongodb at port 27017");
});

mongoose.connection.on('error',(err)=>{
    if (err){
        console.log('error in database'+err);
    }

});
    
    
    
//import all Schema

var port=process.env.PORT||3000;
app.use(express.static(__dirname));
// use middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api",router);




app.get('*', (req, res) => {
    
   return res.sendFile('index.html');
});



app.use((req,res,next)=>{

   const error= new Error('Not found')
   error.status=404;
   next(error);
})

app.use((error,req,res,next)=>{

res.status(error.status||500);
res.json({
    error:{
        message:error.message
    }
})
});
app.listen(port, () => {
   console.log(`Server started on :`+port);
});
