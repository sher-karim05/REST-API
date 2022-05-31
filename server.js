const express = require('express')
const bodyParser = require ('body-parser') 
const cors = require('cors');
const mongoose = require('mongoose')
const todoRoute = require('./routes/Todo')
// const controllers = require('./controllers/Todo')

const app = express();

//use bodyParser to parse data
app.use(bodyParser.urlencoded({extended: true}))

//retrive data in JSON Format
app.use(bodyParser.json())

//middleware for cors to allow cross origin resource sharing
app.use(cors());

//include the todoRoutes
app.use('/api', todoRoute)
app.get('/', (req, res)=> {
    res.json({"message" : "Server is running 😀"})
})

let PORT = 8080

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://sher-karim13:nodejsapi@mern-shopping-website.gjrxm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to database💚")
}).catch(err =>{
    res.send(err)
    console.log('Could not connect to the database. ❌')
})

app.listen(PORT, ()=> {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})