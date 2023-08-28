const { default: mongoose } = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true
})

// const User = mongoose.model("User", {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is invalid")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("Age must be postive number")
//             }
//         } 
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (value.length < 6) {
//                 throw new Error("Password must have atleast 6 charactors")
//             }
//             else if (value.toLowerCase().includes("password")) {
//                 throw new Error("Password must not be the word password")
//             }
//         }
//     }
// })

// const Task = mongoose.model("Task", {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: "task-2",
//     completed: false
// })

// task.save().then((result) => {
//     console.log("New task added",result);
// }).catch((error) => {
//     console.log("Error while creating new task",error);
// })

// const user = new User({
//     name: "vinoth",
//     email: " veeramvinoth@example.com       ",
//     age: 22,
//     password: "       veeram"
// })

// user.save().then((result) => {
//     console.log("Inserted successfully",result)
// }).catch((error) => {
//     console.log("Error while inserting",error)
// })