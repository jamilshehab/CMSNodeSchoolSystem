//Imports 
const express=require('express')
const app=express()
const port=3000

//set database connection 
var database=require('./database/database.js')
const session = require('express-session')
//Static Files 
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/images',express.static(__dirname + 'public/images'))

//set views 
app.set('views' , './views')
app.set('view engine','ejs')

//set sessions 
app.use(session({
    secret:'secretsessionexample',
    resave:true,
    saveUninitialized:true
}));

//set pages
app.get('/',(req,res)=>{
    res.render('login')
})

//Listen on port 3000
app.listen(port,()=>console.info(`Listening on port ${port}`))

