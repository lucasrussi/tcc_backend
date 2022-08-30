//IMPORT MODULE

const DB = require('../../DB/connection')

const mSaveFile = async (obj,sLifeName) =>{
  try{
    const dateNow = require('../genericModules/dateNow')
    obj.file_name = sLifeName
    obj.date_ins = dateNow()
    delete obj.file

    await DB('file')
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

module.exports = mSaveFile