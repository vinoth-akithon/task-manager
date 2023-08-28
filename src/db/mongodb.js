const { MongoClient, ObjectId} = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

// const id = new ObjectId()
// console.log(id)
// console.log(id.generationTime)
// console.log(id.getTimestamp())
// console.log(id.id)
// console.log(id.equals(id))
// console.log(id.toHexString())
// console.log(id.toJSON())
// console.log(id.toString())
// console.log(id.inspect())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log("Unable to connect database.")
    }
    console.log("Database connection extablished successfully!")

    const db = client.db(databaseName)
//     // const collection = db.collection("users")


        //// insert one doc
//     // collection.insertOne({
//     //     name: "vinothkumar",
//     //     email: "vinoth@gmail.com"
//     // });


        //// insertMnay doc
//     // collection.insertMany([{
//     //     name: "vinoth",
//     //     email: "vinoth@example.com"
//     // },{
//     //     name: "aravind",
//     //     email: "aravind@example.com"
//     // }
//     // ], (e,res) => {
//     //     if (e) {
//     //         console.log(e);
//     //     }
//     //     console.log(res)
//     // })
//         // console.log("Document inserted successfully!")


        //// inserMany doc
//     db.collection("tasks").insertMany([
//         {
//             description: "first task",
//             completed: true
//         },
//         {
//             description: "second task",
//             completed: false
//         }
//     ], (error,res) => {
//         if (error) {
//             return console.log("Error while inserting document into mongodb")
//         }
//         return console.log(res)
//     })


        //// finding the document
    // const doc = db.collection("tasks").find({
    //     // completed: true
    // })
    // doc.toArray((error, result) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log(result)
    // })

        ////  updateone doc
//     db.collection("users").updateOne({
//         name: "vinothkumar"
//     }, {
//         $set: {
//                 name: "veeram"
//         }
//     }).then((result) => {
//         console.log("Success",result)
//     }).catch((error) => {
//         console.log("Error",error)
//     })
    

        //// updateMany doc
//     db.collection("tasks").updateMany({
//         completed: false
//     }, {
//         $set: {
//                 completed: true
//         }
//     }).then((result) => {
//         console.log("Success", result)
//     }).catch((error) => {
//         console.log("Error", error)
//     })

   //// deleteOne doc
//     db.collection("users").deleteOne({
//         name: "veeram"
//     }).catch((error) => {
//         return console.log("Error",error)
//     }).then((result) => {
//         return console.log("Success",result)
//     })
//     console.log("I am the best in the world")
})
