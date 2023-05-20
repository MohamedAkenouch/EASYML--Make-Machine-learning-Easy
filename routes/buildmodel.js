import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from 'express';
import cors from 'cors';
const router = express.Router();
import useRegression from '../MachineLearning/controller.js'
import multer from 'multer'
import path from 'path';
import { fileURLToPath } from 'url';

router.all('*', cors());
router.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


var featurespath="";
var targetspath="";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './MachineLearning/data')
  },
  filename: (req, file, cb) => {
      const{body :{modelname}}=req;
      const{body :{model}}=req;
      const filename=model+'-'+file.fieldname+'-'+modelname +/* Date.now() + */'-' + file.originalname;
      if(file.fieldname=='features'){
        featurespath=__dirname+"\\..\\MachineLearning\\data\\"+filename;
      }
      else{targetspath=__dirname+"\\..\\MachineLearning\\data\\"+filename}
      cb(null, filename)}
});

const upload =multer({storage:storage}).fields([
  { name: 'features', maxCount: 1 },
  { name: 'targets', maxCount: 1 },
]);



router.post('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "https://easyml.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  console.log(`Python :\n`) 
  upload(req, res, function (err) {
      if (err) {
        console.log(err)
          return res.status(500).json(err)
      }
      console.log(req.body)
     console.log(featurespath)
     const{body :{model}}=req;
      let mesagefrompython = useRegression.useRegression(model,featurespath,targetspath)
      mesagefrompython.then(function(result) {
        console.log(`from Python :\n`,result) 
        return res.status(200).send(result)
      })
      
      
  })
});



export default router;