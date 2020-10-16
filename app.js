const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get("/", function(req,res){
    res.render("home")
})

app.listen(3000, function(){
    console.log("Starting Server at Port 3000")
})