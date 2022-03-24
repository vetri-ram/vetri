const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/SuVechannel")
.then(()=> console.log("connection succeessfull...."))
.catch((err) => console.log(err));

//schema
//A Mongoose schema defines the structure of the document,
//default values, validators, etc..,

const courselistSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    ctype : String,
    videos:Number,
    author:String,
    active:Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


const courselist = new mongoose.model("courselist",courselistSchema);

//create document or Insert
const createDocument = async () => {
    try{

        const Htmlcourses = new courselist({
            name: "Html",
            ctype: "Front End",
            author : "Subash",
            active: true,
           
        })

        const Nodecourses = new courselist({
            name: "Node Js",
            ctype: "Backend",
            author : "Subash",
            active: true,
           
        })

        const CSScourses = new courselist({
            name: "CSS",
            ctype: "Frontend",
            author : "Subash",
            active: true,
           
        })

        const JScourses = new courselist({
            name: "JavaScript",
            ctype: "Frontkend",
            author : "Subash",
            active: true,
           
        })

        const Expresscourses = new courselist({
            name: "Express Js",
            ctype: "Backend",
            author : "Subash",
            active: true,
           
        })
            //const result = await courselist.insertMany([Htmlcourses, Nodecourses, CSScourses, JScourses,Expresscourses]);
            console.log(result)
    }catch(err){
        console.log(err);

    }
}
//createDocument();

const getDocument = async () => {
    const result = await courselist.find({ ctype: "Backend"})
    .select({name:1})
    .limit(1);
    console.log(result);
}
getDocument();