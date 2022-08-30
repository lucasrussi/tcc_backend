const deleteEmptyValues = async (obj) =>{
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if(obj[key] == ''){
        delete obj[key]
      }
    }
  }
  return obj
}

module.exports =  deleteEmptyValues