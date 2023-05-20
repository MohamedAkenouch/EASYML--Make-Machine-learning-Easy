import express from "express";
const router = express.Router();




router.get('/downloadmodel/:tocken', (req, res) => {
    let filepath='./MachineLearning/builtmodels/'+req.params.tocken+".pickle";
    res.download(filepath);
});



export default router;