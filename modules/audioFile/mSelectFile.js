const DB = require('../../DB/connection')

const mSelectFile = async (iFileId) =>{
  try {
    return await DB('file')
    .select('file_name')
    .where('file_id',iFileId)
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

module.exports =  mSelectFile