//IMPORT MODULE
const dateNow = require('../genericModules/dateNow')
const DB = require('../../DB/connection')
const deleteEmptyValues = require('../genericModules/deleteEmptyValues')

const mUpdateFile = async (obj) =>{
  try {
    obj = await deleteEmptyValues(obj)
    obj.date_upd = dateNow()

    let fileId = obj.file_id
    delete obj.file_id

    await DB('file')
    .update(obj)
    .where('file_id',fileId)
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

module.exports = mUpdateFile