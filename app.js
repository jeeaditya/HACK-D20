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

app.get("/speakers", (req, res)=>{

    const speakers = [
        {
            "name" : "Mark Zuckerbug",
            "desc" : "Hello There",
            "img_url" : "https://techtalklive.org/wp-content/uploads/2017/01/iStock-502642537-1.jpg"
        },
        {
            "name" : "Mark Zuckerbug",
            "desc" : "Hello There",
            "img_url" : "https://techtalklive.org/wp-content/uploads/2017/01/iStock-502642537-1.jpg"
        },{
            "name" : "Mark Zuckerbug",
            "desc" : "Hello There",
            "img_url" : "https://techtalklive.org/wp-content/uploads/2017/01/iStock-502642537-1.jpg"
        },{
            "name" : "Mark Zuckerbug",
            "desc" : "Hello There",
            "img_url" : "https://techtalklive.org/wp-content/uploads/2017/01/iStock-502642537-1.jpg"
        },
    ]

    res.render("speakers", {speakers : speakers} )

})

app.listen(3000, function(){
    console.log("Starting Server at Port 3000")
})