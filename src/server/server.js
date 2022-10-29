const express = require('express')
const mongoose = require('mongoose')
const app = express()
const TheData = require("./models/user")
const ThePost1Data = require("./models/posts1")
const ThePost2Data = require("./models/posts2")
const cors = require('cors')
var bodyParser = require('body-parser')


app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({ extended: false })


const uri="mongodb+srv://<username>:<password>@cluster0.iiwqhxt.mongodb.net/?retryWrites=true&w=majority";


async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("connected to MongoD B")
    } catch (error){
        console.error(error); 
    }
}


connect();

app.get('/', async (req, res) =>{
    
    
})

app.post('/signin/', async (req, res) =>{
    console.log(req.body)
    TheData.findOne({useremail:req.body.email,userpassword:req.body.password} ,(error, data) =>{    
        if(error){
            console.log(error)
        } 
            if(data){
                console.log({data:data.username})
                res.send({data:data.username})
            } else{
                console.log('no user exits')
                res.send({data:"Account Credentials are incorrect"})
            }
        
    })
  

})

app.post('/signup/', async (req, res) => {
    console.log(req.body)
    
    TheData.findOne({useremail:req.body.email} ,(error, data) =>{
        if(error){
            console.log(error)
        } else {
            if(data){
                console.log('user exists')
                res.send({Status:"This user already exists"})
            } else{
                console.log('no user exits')
                
                const TheDataData = new TheData({username:req.body.name,useremail:req.body.email,userpassword:req.body.password,usernumber:req.body.number});
                // const TheNewUserData = new TheNewUser({UserData:"Thenewuser1",UserDataLast:"Thenewuser2"});
                
                try{
                    // await thoko.save();
                    TheDataData.save()
                      .then(data => console.log(data))
                      .catch(error => console.log(error))
                    // await TheNewUserData.save();
                    res.send({Status:"Your Account has been created"})
                } catch(error){
                    console.log(error)
                } 
                
            }
        }
    })
    

})


app.post('/setpost/', async (req, res) => {
    console.log(req.body)

    const PostData = new ThePost1Data({username:req.body.name,userpost:req.body.comment});
    
    try{
        PostData.save()
          .then(data => console.log(data))
          .catch(error => console.log(error))
            res.send({Status:"Post saved"})
    } catch(error){
        console.log(error)
    } 

})

app.post('/setpost2/', async (req, res) => {
    console.log(req.body)

    const PostData = new ThePost2Data({username:req.body.name,userpost:req.body.comment});
    
    try{
        PostData.save()
          .then(data => console.log(data))
          .catch(error => console.log(error))
            res.send({Status:"Post saved"})
    } catch(error){
        console.log(error)
    } 

})

app.get('/challeng1posts/', async (req, res) => {
  
    ThePost1Data.find((error, data) =>{
        if(error){
            console.log(error)
        } 
            if(data){
                console.log('posts1 recieved')
                console.log(data)
                res.send({data:data})
            } else{
                console.log('posts1 not recieved')
            }
    })

})

app.get('/challeng2posts/', async (req, res) => {
  
    ThePost2Data.find((error, data) =>{
        if(error){
            console.log(error)
        } 
            if(data){
                console.log('posts2 recieved')
                console.log(data)
                res.send({data:data})
            } else{
                console.log('posts2 not recieved')
            }
    })

})

app.listen(8000,() => {  
    console.log("server started on port 8000")
})
