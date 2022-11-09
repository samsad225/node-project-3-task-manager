const express = require('express')
const app= express()
const tasks = require('/home/pi/Downloads/node-express-course-main/routes/task.js')
// routes
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})
app.use('/api/v1/tasks',tasks)
const port= 3000
app.listen(port, console.log( `the server is listening to ${port}...`))  