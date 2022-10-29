const express = require('express')
const mongoose = require('mongoose')
const app = express()
const TheData = require("./models/user")
const TheNewUser = require("./models/TheNewUser")
const whatsappSchema = require("./models/whatsappSchema")
const cors = require('cors')
var bodyParser = require('body-parser')

// app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// fill in the uri for you mongo db bellow
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

// add to database function

// app.post('/signin/', urlencodedParser, async function (req, res) {
    
//     TheData.findOne({useremail:req.body.email,userpassword:req.body.password} ,(error, data) =>{
//         // console.log(req.body.email)
//         if(error){
//             console.log(error)
//         } else {
//             if(data){
//                 console.log('email found')
//                 res.send({Status:"Details correct"})
//             } else{
//                 res.send({Status:"Password Wrong"})
//                 console.log('Password wrong')
                
//                 // const TheDataData = new TheData({username:req.body.name,useremail:req.body.email,userpassword:req.body.password});
//                 // // const TheNewUserData = new TheNewUser({UserData:"Thenewuser1",UserDataLast:"Thenewuser2"});
                
//                 // try{
//                 //     // await thoko.save();
//                 //     TheDataData.save()
//                 //       .then(data => console.log(data))
//                 //       .catch(error => console.log(error))
//                 //     // await TheNewUserData.save();
//                 //     res.send({Status:"Your Account has been created"})
//                 // } catch(error){
//                 //     console.log(error)
//                 // } 

                
//             }
//         }
//     })
    

// })


app.get('/', async (req, res) =>{
    let number = '+27'+'728342305';
    let message = 'Welcome to the Twillio Thoko';
    
    console.log("will try send")

    
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = 'ACe9225491e4b975a9c927c8a85fbee829'; 
    const authToken = 'a81615439c49a3a280d9aad3b6a5fab9'; 
    const client = require('twilio')(accountSid, authToken); 
    
    client.messages 
    .create({ 
        body: message, 
        from: 'whatsapp:+14155238886',       
        to: 'whatsapp:'+number 
    }) 
    .then(message => console.log(message.sid)) 
    .done();

    let usermessageid = message.sid
    
    const TheData = new whatsappSchema({userphonenumber:number,usermessage:message,usermessageid:usermessageid});
    // const TheNewUserData = new TheNewUser({UserData:"Thenewuser1",UserDataLast:"Thenewuser2"});
    
    try{
        // await thoko.save();
        TheData.save()
          .then(data => console.log(data))
          .catch(error => console.log(error))
        // await TheNewUserData.save();
        res.send({Status:"Whatsapp saved to database"})
    } catch(error){
        console.log(error)
    } 
   
})



app.post('/signup/', urlencodedParser, async function (req, res) {
    
    TheData.findOne({useremail:req.body.email} ,(error, data) =>{
        // console.log(req.body.email)
        if(error){
            console.log(error)
        } else {
            if(data){
                console.log('user exists')
                res.send({Status:"This user already exists"})
            } else{
                console.log('no user exits')
                
                const TheDataData = new TheData({username:req.body.name,useremail:req.body.email,userpassword:req.body.password});
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

                console.log("will try send")
    
                // Download the helper library from https://www.twilio.com/docs/node/install
                // Find your Account SID and Auth Token at twilio.com/console
                // and set the environment variables. See http://twil.io/secure
                const accountSid = 'ACe9225491e4b975a9c927c8a85fbee829'; 
                const authToken = 'a81615439c49a3a280d9aad3b6a5fab9'; 
                const client = require('twilio')(accountSid, authToken); 
                 
                client.messages 
                      .create({ 
                         body: 'Welcome to the Twillio Thoko bot https://kingwebsites.co.za/powertoact/incubeko-present.mp4', 
                         from: 'whatsapp:+14155238886',       
                         to: 'whatsapp:+27727237808' 
                       }) 
                      .then(message => console.log(message.sid)) 
                      .done();

                
            }
        }
    })
    

})

app.listen(8000,() => {  
    console.log("server started on port 8000")
})
