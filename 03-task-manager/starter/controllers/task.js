const getAllTasks = (req,res) =>{
    res.send('get all tasks')
}

const createTask= ()=>{
    res.send('create taks')
}

const getTask= ()=>{
    res.send('get single task')
}

const updateTask= ()=>{
    res.send('update task')
}

const deleteTask= ()=>{
    res.send('delete task')
}

module.exports={
    getAllTasks,createTask,getTask,updateTask,deleteTask
} 