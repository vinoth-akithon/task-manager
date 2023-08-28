const express = require("express")
const User = require("./models/user")
const Task = require("./models/task")
const { default: mongoose} = require("mongoose")
const { ObjectId } = require("mongodb")
require("./db/mongoose")
const port = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    return res.send("<h1>Welcome to this task manager app</h1>")
})

app.post("/users", (req,res) => {
    const user = new User(req.body)
    user.save().then((result) => {
        return res.status(201).send({
            message: "New user added successfully",
            result
        })
    }).catch(() => {
        return res.status(400).send({
            message: "Error while creating new user",
        })
    })
})

app.get("/users", (req,res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send(error)
    })
} )

app.get("/users/:_id", (req,res) => {
    const _id = ObjectId(req.params._id)
    User.findOne({_id}).then((user) => {
        if (!user) {
            return res.json({message: "Please provide a valid user id"})
        }
        return res.send(user)
    }).catch((error) => {
        console.log("fail")
        return res.send(error)
    })
})


app.post("/tasks", (req,res) => {
    const task = new Task(req.body)
    task.save().then((result) => {
        return res.status(201).send({
            message: "New task added successfully",
            result
        })
    }).catch((error) => {
        return res.status(400).send({
            message: "Error while creating new task",
            error
        })
    } )
})


app.get("/tasks", (req,res) => {
    Task.find({}).then((tasks) => {
        return res.send(tasks)
    }).catch((error) => {
        return res.send({"Error": error})
    })
})

app.get("/tasks/:_id", (req,res) => {
    const _id = ObjectId(req.params._id)
    Task.findOne({_id}).then((task) => {
        if (!task) {
            return res.status(400).json({message: "Please provide a valid task id"})
        }
        return res.send(task)
    }).catch((error) => {
        return res.status(500).send(error)
    })
})



app.listen(port, () => {
    console.log("Server is running on port",port)
})