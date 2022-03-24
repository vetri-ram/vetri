const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize('mystudents','root','SubashVetri',{
    host:'localhost',
    dialect:'mysql',
    logging:true,
    pool:{max:5,min:0,idle:10000}
})

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch(err=>{
    console.log("error"+err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



db.sequelize.sync({force:false})
.then(()=>{
    console.log("yes re-sync");
})
db.users = require('./users')(sequelize,DataTypes);
db.posts = require('./posts')(sequelize,DataTypes);

db.users.hasOne(db.posts,{foreignKey:'user_id'});
db.posts.belongsTo(db.users,{foreignKey:'user_id'});

module.exports = db;

