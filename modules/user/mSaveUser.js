const dateNow = require('../genericModules/dateNow')
const DB = require('../../DB/connection')

const mSaveUser = async (obj) =>{
    try{
      obj.date_ins = await dateNow()
      
      await DB('userTable')
      .insert(obj)
      .then()
      .catch((e)=>{
        console.log(e)
        throw new Error(e)
      })
  
    }catch (e) {
      console.log(e)
      throw new Error(e)
    }
  }
  
  export default mSaveUser