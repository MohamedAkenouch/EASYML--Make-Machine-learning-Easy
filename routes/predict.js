import express from "express";
const router = express.Router();
import predict from '../MachineLearning/controller.js'
import multer from 'multer';
import csv from 'fast-csv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


var tobepredicted="";
var tocken="";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './MachineLearning/prediction/tobepredicted')
  },
  filename: (req, file, cb) => {
      tocken=req.params.tocken;
      const filename=tocken+/* Date.now() + */'-' + file.originalname;
      tobepredicted=__dirname+"\\..\\MachineLearning\\prediction\\tobepredicted\\"+filename;
      cb(null, filename)
  }
});

const upload = multer({storage:storage});

router.post('/predict/:tocken',upload.single('file') , (req, res) => {  
  console.log('hii',req.params.tocken)
  let mesagefrompython = predict.predict(tocken,tobepredicted)
    mesagefrompython.then(function(result) {
      console.log('from Python :\n',result) 
      return res.status(200).download("./MachineLearning/prediction/predictedvalues/"+req.params.tocken.toString()+".csv")
    })
});



export default router;