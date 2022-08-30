//const MODULE
const mSaveFile = require('../modules/audioFile/mSaveFile');



const Router = require("express");
const router = Router();
const multer = require("multer");
const mDeleteFile = require('../modules/audioFile/mDeleteFile');
const mSelectFile = require('../modules/audioFile/mSelectFile');
const mUpdateFile = require('../modules/audioFile/mUpdateFile');
const dateNow = require('../modules/genericModules/dateNow')

let sLifeName = ''
const storage = multer.diskStorage(
  {
    destination: function(req,file,cb){
      cb(null,'public/data/upload')
    },
    filename: function(req,file,cb){
      const ext = file.originalname.substring(
        file.originalname.lastIndexOf('.')-1
      )
      const data =  dateNow();
      sLifeName = file.fieldname + '-' + data + '.' + ext
      cb(null,sLifeName)
    }
  }
)
    
const uploadFileStorage = multer({ storage: storage });


router.post('/newAudioFile',uploadFileStorage.fields([{name:'file', maxCount:1}]) ,async(req,res) =>{
  try{

    /**
     * reqJson structure
     * {
     *  userId,
     *  fileDesc,
     *  accountId
     * }
     * 
     */
    const reqJson = JSON.parse(JSON.stringify(req.body));

    await mSaveFile(reqJson,sLifeName)
    .then((resp) =>{

    }).catch((e)=>{
      console.log(e)
      throw new Error(e)
    })

  }catch(e){
    console.log(e)
    res.json(
      {
        status:500,
        mensage:`Error at upload audio file router. Error ${e}`
      }
    )
  }
})

router.delete('/deleteAudioFile',async(req,res) =>{
  try{
    await mDeleteFile()
    .then((resp)=>{

    }).catch((e) =>{
      console.log(e)
      throw new Error(e)
    })
  }catch(e){
    console.log(e)
    res.json(
      {
        status:500,
        mensage:`Error at delete audio file router. Error ${e}`
      }
    )
  }
})

router.get('/selectAudioFile/:audioId', async(req,res) =>{
  try {
    await mSelectFile()
    .then((resp)=>{

    })
    .catch((e) =>{
      console.log(e)
      throw new Error(e)
    })
  } catch (e) {
    console.log(e)
    res.json(
      {
        status:500,
        mensage:`Error at select audio file router. Error ${e}`
      }
    )
  }
})

router.patch('/updateAudioFile', async(req,res)=>{
  try{
    await mUpdateFile()
    .then((resp) =>{

    })
    .catch((e)=>{
      console.log(e)
      throw new Error(e)
    })
  } catch (e) {
    console.log(e)
    res.json(
      {
        status:500,
        mensage:`Error at update audio file router. Error ${e}`
      }
    )
  }
})


module.exports =  router