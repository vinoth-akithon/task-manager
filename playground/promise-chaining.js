require("../src/db/mongoose")
const { ObjectID } = require("bson")
const User = require("../src/models/user")
const Task = require("../src/models/task")

// const add = (num1,num2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num1 + num2)
//         }, 2000)
//     })
// }


//// promise chaining
// const age = 30
// User.findOneAndUpdate({_id: ObjectID("62d4532e75575354d6d43d52")}, {age}, {new:true}).then(() => {
//     console.log("pass1.1")
//     return User.countDocuments({age})
// }).then((count) => {
//     console.log("pass1.2")
//     return console.log(count)
// })
// .catch((error) => {
//     return console.log(error)
// })



///// async await
const findOneAndUpdateAge = async (_id,age) => {
    console.log(1 instanceof String)
    return "hi"
    if (age instanceof Number) {
        return {message: "Age must be a Number"}
    }
    const user = await User.findOneAndUpdate({_id: ObjectID(_id)}, {age})
    console.log(user)
    const count = await User.countDocuments({age})
    return count
}

findOneAndUpdateAge("62d4532e75575354d6d43d52","23").then((result) => {
    console.log("result:", result)
}).catch((error) => {
    console.log("Error:", error)
})




// Task.findOneAndRemove({_id: ObjectID("62d45a90e3f67bef223025ad")}, {new: true}).then((doc) => {
//     if (!doc) {
//         return {message: "No matched document found for delete"}
//     }
//     console.log("pass2.1")
//     return Task.countDocuments({completed: true})
// }).then((count) => {
//     console.log("pass2.2");
//     return console.log(count)
// }).catch((error) => {
//     return console.log(error)
// })





// add(1,2).then((result) => {
//     console.log(result)
//     return add(result,3)
// }).then((result) => {
//     return console.log(result)
// }).catch((error) => {
//     return console.log({Error: error})
// })