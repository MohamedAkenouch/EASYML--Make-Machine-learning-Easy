import express from 'express';
const router = express.Router();
import multer from 'multer';




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './MachineLearning/models')
  },
  filename: (req, file, cb) => {
      const filename=file.originalname;
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

router.post('/upload',upload.single('file') , (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    } else{
        return res.status(200).send('File Uploaded');
      }
  
    });


export default router;