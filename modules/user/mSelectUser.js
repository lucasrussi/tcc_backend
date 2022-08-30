const DB = require('../../DB/connection')

const mUserFile = async (sUserLogin, sUserPass) =>{
  try {
    return await DB('userTable')
    .select('user_id','user_name')
    .where('user_login',sUserLogin)
    .andWhere('user_pass',sUserPass)
    .then((rows) =>{
      return JSON.parse(JSON.stringify(rows))
    })
    .catch((e) =>{
      console.log(e)
      throw new Error(e)
    })
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
  
} 

export default mUserFile