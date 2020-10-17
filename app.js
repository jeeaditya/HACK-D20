const express = require('express')

const app = express()

const speakers = require('./speakers');
//console.log(speakers)

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('views', 'views')
app.set('view engine', 'ejs')



app.get("/", function(req,res){
    res.render("home",{speakers : speakers})
})


app.listen(3000, function(){
    console.log("Starting Server at Port 3000")
})