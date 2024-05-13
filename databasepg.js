const { Client } =require('pg')

const client = new Client({
host:'localhost',
user:'postgres',
port:5432,
password:'12345',
database:'users'
}
)

client.connect();

client.query('Select * from emp',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})


