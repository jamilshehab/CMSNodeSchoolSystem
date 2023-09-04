const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'P@ssw0rd',
    database:'cms'
})
connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
      console.log("My Sql Database is connected Successfully");
    }
});

module.exports=connection;