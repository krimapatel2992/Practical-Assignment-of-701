const sequelize=require("sequelize");
const conn= new sequelize("krima","root","",{  
    dialect:"mysql",
    host:"localhost",
});
module.exports=conn;