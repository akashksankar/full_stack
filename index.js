//1.import
express = require('express')
require('./Connection')
const EmployeeModel=require('./ model/employee')

//2.initialize
var app = express()

//3.api creation
app.get('/', (req, res) =>{
    res.send("message form server")
})
app.get('/trial', (req, res) => {
    res.send("this is a message form server")
})
//4.port setting
app.listen(3004, () => {
    console.log('listening on port 3004')

})

//api to add data to db
app.post('/add', async (req, res) => {
    const result = await new EmployeeModel(req.body);
    result.save();
    res.send("data added")
})

