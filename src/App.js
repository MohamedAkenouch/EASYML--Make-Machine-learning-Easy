import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs'
import Models from './pages/Models'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Experts from './pages/Experts';
import SingIn from './pages/SingIn';
import ShowBlog from './pages/showBlog';
import ExpertDetails from './components/ExpertDetails/ExpertDetails';
import { getExperts } from './actions/Experts';
import { getModels } from './actions/Models';
import useStyles from './styles';
import Exploite from "./pages/Exploite/Exploite";
import ChoseModel from "./pages/ChoseModel";
import Build from "./pages/Build/Build"
import ShowExploitable from './pages/showExploitable';
import ShowModel from './pages/ShowModel';
import Dashboard from './pages/Dashboard/Dashboard';
import ExploiteModel from './pages/ExploiteModel/ExploiteModel';
import ContactUs from './pages/ContactUs/ContactUs';


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user)

  const isAdmin = (user!== undefined && user!==null) ? 
        ( (user.result === undefined || user.result === null) ? false 
        : (user.result.email==='EasyMLadmin@gmail.com' ? true : false))
        : false ;


  useEffect(() => {
    dispatch(getExperts());
    dispatch(getModels());
  }, [currentId, dispatch]);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/experts" element={<Experts currentId={currentId} setCurrentId={setCurrentId} />}>  </Route>
        <Route exact path="/ExpertDetails/:id" element={<ExpertDetails currentId={currentId} setCurrentId={setCurrentId}/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route exact path="/models" element={<Models />}></Route>
        <Route exact path="/models/:id" element={<ShowModel/>}></Route>
        <Route exact path="/signin" element={<SingIn/>}></Route>
        <Route exact path="/showBlog/:id" element={<ShowBlog/>}></Route>
        <Route exact path="/ChoseModel" element={<ChoseModel/>}  />
        <Route path="/Build/:idModel" element={<Build/>}  />
        <Route path="/Exploite/:tocken" element={<ExploiteModel/>}  />
        <Route path= "/dashboard"  element={isAdmin ? <Dashboard /> : <h1 className='text-center'>Not Authorized</h1> }  />
        <Route path="/showExploitable" element={ <ShowExploitable/> }  />
        <Route path="/contact-us" element={ <ContactUs /> }  />


      </Routes>
    </Router>
    
    
  );
};

export default App;
