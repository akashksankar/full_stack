var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://aakashkshankar:akash@cluster0.sa3q9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("connected")
    })
    .catch((err) => {
        console.log(err)
})