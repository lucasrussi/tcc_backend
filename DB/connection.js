const DB = require('knex')({
  debug:true,
  client:'mysql2',
  connection:{
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tcc',
    charset:'UTF8'
  },
  pool:{
    min:0,
    max:10,
    idleTimeoutMillis:5000
  }
})

DB.raw('select 1+1 as result').then()
  .catch((e)=>{
    console.log(e) 
    throw new Error(e)
  })

module.exports =  DB