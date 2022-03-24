module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        // {
        //     type:DataTypes.STRING,
        // //     set(value){
        // //         this.setDataValue('name',value+' vetri')
        // //   }
        // },
        
        email:DataTypes.STRING,
        // {
        //     type:DataTypes.STRING,
        //     defaultValue:"test@gmail.com",
        //     allowNull:false,
        //     unique:true

        //     // set(value)
        //     // {
        //     //     this.setDataValue('email',value+'@gmail.com')
        //     // }
        // },
        gender:DataTypes.STRING,
        // {
        //     type:DataTypes.STRING,
        //     validate:{
        //         equals:'male'
        //     }
        // }

    },{
        //tableName:'usersdata',
        createdAt:false,
        updatedAt:false,
         
    });
    return Users;
}