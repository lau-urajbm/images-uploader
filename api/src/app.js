const express = require('express');
const morgan = require('morgan');
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser');

/* const projectRoutes =require('./routes/projects')
const taskRoutes =require('./routes/tasks') */
const uploadImage= require('./routes/uploadImage')

const app = express()

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
const cors = require('cors')

/* middlewares */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

cloudinary.config({ 
    cloud_name: 'lau-ura', 
    api_key: '256733759242578', 
    api_secret: 'QNooW2VLa_sBMPR7gTblTV0sDXs' 
  });

app.use('/upload', uploadImage)
/* app.use('/api/projects',projectRoutes)
app.use('/api/tasks',taskRoutes) */




module.exports = app