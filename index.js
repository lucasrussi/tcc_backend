require('dotenv').config()
const express = require('express')
const app = express()

//configuração e utilização do CORS
const cors = require('cors')
app.use(cors())


//Configuração e utilização das propriedades do Express
app.use(express.static('public'))
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(express.json({ limit: '50mb' }))


//Importação e utilização das Routers
const FileUploads = require('./routers/FileUploads')
app.use(FileUploads)

const FileDownload = require('./routers/FileDownloads')
// app.use(FileDownload)


app.listen(9876,()=>{
    console.log("O servidor está rodando "+9876)
})