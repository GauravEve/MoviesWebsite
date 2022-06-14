const express=require('express')
const app=express()

const users = []

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.render('anime.ejs')
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.post('/login',(req,res)=>{
    
})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})

app.post('/register',(req,res)=>{

})

app.listen(8000,()=>{
    console.log("server is listening");
})