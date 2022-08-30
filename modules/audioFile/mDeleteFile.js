const DB = require('../../DB/connection')

const mDeleteFile = async (iFileId) =>{
  try {
    await DB('file')
    .where('file_id',iFileId)
    .del()
    .then()
    .catch((e)=>{
      console.log(e)
      throw new Error(e)
    })
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}

module.exports = mDeleteFile