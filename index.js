
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import fileUpload from 'express-fileupload';


import expertRoutes from './routes/experts.js';
import exploitableRoutes from './routes/exploitables.js';
import modelRoutes from './routes/models.js';
import usersRoutes from "./routes/user.js";
import blogsRoutes from './routes/blogs.js';
import sendMail from './routes/sendMail.js';
import buildmodel from './routes/buildmodel.js';
import downloadmodell from './routes/downloadmodel.js';
import downloadexmpl from './routes/downloadexmpl.js';
import usemodel from './routes/usemodel.js';
import predict from  './routes/predict.js';
import upload from './routes/upload.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});
// app.use(fileUpload());
app.use('/experts', expertRoutes);
app.use('/exploitables', exploitableRoutes);
app.use('/models', modelRoutes);
app.use('/user', usersRoutes);
app.use('/blogs', blogsRoutes);
app.use('', sendMail);
app.use('/buildmodel' , buildmodel);
app.use('/' , downloadexmpl);
app.use('/' , usemodel);
app.use('/' , predict);
app.use('/' , downloadmodell);
app.use('/' , upload);


const CONNECTION_URL = 'mongodb://akenouch:24861379@cluster0-shard-00-00.p0wac.mongodb.net:27017,cluster0-shard-00-01.p0wac.mongodb.net:27017,cluster0-shard-00-02.p0wac.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dq29kg-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);