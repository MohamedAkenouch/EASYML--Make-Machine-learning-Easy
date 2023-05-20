import express from "express";
const router = express.Router();




router.get('/downloadfexmpl', (req, res) => {
  console.log("done");
  res.download("./MachineLearning/examples/features.csv")
});
router.get('/downloadtexmpl', (req, res) => {
  console.log("done");
  res.download("./MachineLearning/examples/target.csv")
});



export default router;