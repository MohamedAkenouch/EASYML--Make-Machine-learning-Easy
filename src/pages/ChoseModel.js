import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function ChoseModel() {

    
    
    return (
      <div>
        <Link to={{pathname:`/Build/LinearRegression` }} > Linear regression </Link>
        <br></br>
        <Link to={{pathname:"/Build/SupportVectorRegression" }} > Support Vector Regression</Link>
        <br></br>
        <Link to={{pathname:"/Build/RandomForestRegressor"}} > Random Forest Regressor</Link>
      </div>
    );
    }
export default ChoseModel;