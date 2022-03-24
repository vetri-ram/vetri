var db = require('../models/app');

const Users = db.users;
const Posts = db.posts;

const {Sequelize,QueryTypes} = require('sequelize');

var addUser = async (req, res) => {

    let data = await Posts.create({name:'vetritest',title:'testvetri@gmail.com',content:'subashvetri',gender:'male'});
    // await data.save();

    
    // let data = await Users.create(
    //     { 
    //         name: 'vetri', 
    //         email: 'New bike fashino', 
    //         content: 'female',
    //         user_id: 8
    //     });

     
    // data.name = 'Caltexvetri';

    // data.save();

    console.log(data.dataValues);
    let response = {
        data: 'ok'
    }
    res.status(200).json(response);
}

var crudOperation = async (req, res) => {

    //insert data
    // let data = await Users.create({name:'ambica',email:'ambica@gmail.com',gender:'female'}); 
    //   console.log(data.id);

    //update
    //   let data = await Users.update({name:'suba', email:'suba@gmail.com'},{
    //       where:{
    //           id:4
    //       }
    //   });

    //delete 
    // let data = await Users.destroy({
    //     where:{
    //         id:2
    //     }
    // })

    //delete data in table

    // let data = await Users.destroy({
    //     truncate:true
    // })

    //Bulk data adding

    // let data = await Users.bulkCreate([
    //     {name:'name1',email:'name1@gmail.com',gender:'male'},
    //     {name:'name2',email:'name2@gmail.com',gender:'male'},
    //     {name:'name3',email:'name3@gmail.com',gender:'male'},
    //     {name:'name4',email:'name4@gmail.com',gender:'male'}

    // ]);

    //find
    //let data = await Users.findOne({});
    let response =

    {
        data: data
    }
    res.status(200).json(response);

}

var modelQuery = async (req,res) => {
   
    // let data = await Users.create({name:'vetriram',email:'vetri@gmail.com',gender:'male'},{
    //     fields:['email','gender']
    // });

     //select
    // let data = await Users.findAll({
    //     attributes:[
    //         ['name','UserName'],
    //         ['email','EmailId'],
    //         'gender',[
    //             Sequelize.fn('Count',Sequelize.col('email')),'emailCount'

    //         ]
    //     ]
    // });

    //include , Exclude


    //<-----Condition---->
    let data = await Users.findAll({
        where:{
            id:2
        }
    });

    let response = {
        data:data
    }
    res.status(200).json(response);
}

var dataFinder = async (req,res) => {

    // let data = await Users.findAll({});
    //let data = await Users.findOne({});
    // let data = await Users.findAndCountAll({
    //     where:{
    //         email:'vetri@gmail.com'
    //     }
    // });
       let [data,created] = await Users.findOrCreate({
           where:{name:'subha'},
           defaults:{
               email:'subha@gmail.com',
               gender:'female',
           }
       });

    let response = {
        data :data,
        add:created
    }
    res.status(200).json(response);
}

var getterSetter = async (req,res) => {
    let data = await Users.create({name:'caltex',email:'caltaxvetri',gender:'male'})
     let response = {
         data: 'Getter - Setter'
     }
     res.status(200).json(response)
}

var dataValidation = async (req,res)=> {

    let data = await Users.create({name:'Subash',email:'subash@gmail.com',gender:'male'})

    let response = {
        data: 'Data Validation Successfully'
    }

    res.status(200).json(response);

}

var rawQuery = async (req,res) => {

    const users = await db.sequelize.query("select * from `users`",{
        type:QueryTypes.SELECT,
        // model:Users,
        // mapToModel:true,
    });

    let response = {
        data : 'Queries ok', record: users
    }
    res.status(200).json(response);
}

var oneToOne = async (req,res) => {
      //let data = await Users.create({name:'demo',email:'demo@gmail.com',gender:'male'});
      let data = db.posts.name
        let datas = db.users.name
        if(data == datas){
            db.posts.id = db.users.id
        }
    //    let data = await Users.findOne({
    //        attributes:['name','email'],
    //        include:[
    //            {
    //                model:Posts,
    //                attributes:[['title','PostTitle'],['name','PostName']]
    //            }
    //        ],
    //        where:{id:8}
    //     });
    // let response = {
    //     data:'one-to-one'
    // }
    res.status(200).json(data);
}

var belongsTo = async (req,res) => {
    //let data = await Users.create({name:'demo',email:'demo@gmail.com',gender:'male'});
     let data = await Posts.findOne({
         where:
         {id:'8'},
         include:[
                 {
                     model:Users,
                     attributes:['id','name','email']
                 }
             ]

        
     });         
  let response = {
      data:'one-to-one'
  }
  res.status(200).json(data);
}




module.exports = {
    addUser,
    crudOperation,
    modelQuery,
    dataFinder,
    getterSetter,
    dataValidation,
    rawQuery,
    oneToOne,
    belongsTo
}