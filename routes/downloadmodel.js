import express from "express";
const router = express.Router();




router.get('/downloadmodell/:file', (req, res) => {
    let filepath='./MachineLearning/models/'+req.params.file;
    res.download(filepath);
});



export default router;