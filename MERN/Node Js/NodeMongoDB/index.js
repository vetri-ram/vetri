var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/demodbs";

MongoClient.connect(url,function(err,db){
    if (err) throw err;

    //database & Collection Created

    var dbname = db.db("demodbs");
    dbname.createCollection("students", function(err,result){
        if(err) throw err;
        console.log("Collection Created Successfully");
        db.close();
    });

       //Data inserted in collection 

    dbname.collection("students").insertOne({name:"subash",city:"Mayilai"},function(err,result){
        if (err) throw err;
        console.log("Document Inserted Successfully");
        db.close();
    });

    //  // Multiple Data inserted in Collections 

     var dbdata = db.db("demodb");
     var mulipledata = [
         {name: "mariappan", city: "Nellai",Age:52},
         {name: "unni", city: "palakad", state:"Kerala", Age:29},
         {name: "Vishnu", city: "Trivandrum", state:"Kerala", Age:30}
     ]

     dbdata.collection("students").insertMany(mulipledata,function(err,result){
         if (err) throw err;
         console.log("Data Inserted Successfully");
         db.close();
     });

    // //FindOne

    var dbdata = db.db("demodb");
    dbdata.collection("students").findOne({},function(err,result){
        if (err) throw err;
        console.log(result.name);
        db.close();
    });

    //Find

    var dbdata = db.db("demodb");
    dbdata.collection("students").find({}).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        db.close();
    })

});