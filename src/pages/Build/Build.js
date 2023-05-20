import React, { useState,useEffect } from "react";
import axios from "axios";
import { Redirect , } from "react-router-dom";
import { Link } from "react-router-dom"
import buildlogo from '../../assets/images/build.png';
import emptylogo from '../../assets/images/v.png';
import { useParams } from "react-router-dom";
import "./Build.css";
import { useSelector,useDispatch } from "react-redux";
import { createExploitable} from '../../actions/exploitables';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getModels } from '../../actions/Models';
import { updateExpert } from "../../api";
import { toast} from 'react-toastify';


var fileDownload = require('js-file-download');


function Build() {
  const dispatch = useDispatch();
  var r = {};
    useEffect(() => {
        dispatch(getModels());
        
    }, [dispatch]);
  const navigate = useNavigate();
  const location = useLocation();
  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem('profile')))
  } , [location]) 

  const { idModel } = useParams();
  const Model = useSelector((state) =>(state.Models.find(model => model._id===idModel) ));
  const Modelsdata = useSelector((state) =>(state.Models ));

  // console.log(Modelsdata)
  const model_name = Model.name;
  

  const [exploitData , setExploitData] = useState({ tocken: '' , modelname: '', accuracy: ''});


  var [PyData, setPyData] = useState();
  const [modelname, setName] = useState();
  const [features, setfeatures] = useState([]);
  const [targets, settargets] = useState([]);
  const [b, setB] = useState(false);
  
  const onInputChangeF = (e) => {
      setfeatures(e.target.files)
      
  };
  const onInputChangeT = (e) => {
      settargets(e.target.files)
  };
  const donothing =(e) => {

  }
  const download = (e) => {
    axios({
      url:"//easyml-app.herokuapp.com/downloadfexmpl",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      fileDownload(res.data,'featureexample.csv')
    })
    axios({
      url:"//easyml-app.herokuapp.com/downloadtexmpl",
      method:"GET",
      responseType:"blob"
    }).then((res)=>{
      fileDownload(res.data,'targetexample.csv')
    })

    
  };
 
  const onSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('model',model_name+'.py');
      data.append('modelname', modelname);
      data.append('features', features);
      data.append('targets', targets);
      for(let i = 0; i < features.length; i++) {
        data.append('features', features[i]);
      }
      for(let i = 0; i < targets.length; i++) {
        data.append('targets', targets[i]);
      }
      axios(
      {
        method: 'post',
        url: "https://easyml-app.herokuapp.com/buildmodel",
        data: data
      }
      )
      .then((response) => {
          toast.success('Upload Success');      
          setPyData('ttttt');
          console.log(PyData)
          let ress =response.data
          r['tocken']= ress.split("\r\n")[1];
          r['modelname']= modelname;
          r['accuracy']= ress.split("\r\n")[0];
          r['idUser']= user.result._id;
          console.log(r)
          dispatch(createExploitable(r))
          navigate("/Exploite/"+ress.split("\r\n")[1]);
      })
      .catch((e) => {
          toast.error('Upload Error')
      })  

  };
  
    return (
      <div className="containerb">
      <div className="sideb">
        <br></br>
        <h2 className="Modelb">{model_name}</h2>
        <br></br><br></br><br></br><br></br>
        <div className="consdivb">
        <p style={{"fontSize": "33px"}}>Instructions : </p><br></br><br></br>
        <p style={{"textIndent":"30px"}}>&#10061; feature and target files should :</p><br></br>
        <p style={{"textIndent":"40px"}}>&#10061; have .csv extention.</p><br></br>
        <p style={{"textIndent":"40px"}}>&#10061; have the same number of lines.</p><br></br>
        <p style={{"textIndent":"30px"}}>&#10061; number of instances should be between 200 and 10 000.</p>
        </div>
      </div>

      <form className="sidebf">
        <div className="rowb">
          <p><Link to={`/models/${idModel}`} className="backb">&lt; back</Link></p>
        </div>
        <div className="buildyourb">
          Build your {model_name}
        </div>
        <div className="rowb" id="a">
          <div className="lineb"></div>
            <div className="modelnameb">
              <label className="mr-2">Exploitable name :  </label>
              <input type="text" 
                  onChange={event => {
                    const { value } = event.target;
                    setName(value);
                  }} />
            </div>
            
          </div>
        <div className="row justify-content-center">
          <div className="col-2"></div>
          <div className="col-4">
            <h5 >Features : </h5>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <h5 >Targets : </h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-5">
            <input
            id="J"
              className="fileInput"
              type="file"
              name="features"
              accept=".csv"
              onChange={onInputChangeF}
            /> 
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <input
              name="target"
                className="ml-1"
                id="J"
                type="file"
                accept=".csv"
                size={10}
                onChange={onInputChangeT}
            />
          </div>
        </div>

        <div className="rowb">
          <div className="dowexb">
            <div className="lineb" id="S"></div>
            <button className="dexamplesb" type="button" onClick={(e)=>download(e)}>Download Examples</button>
            <div className="lineb" id="S"></div>
          </div>
          
        </div>
        {/* <div className="rowb">
          <button className="buildb" id="b"  type="button" onClick={(e)=>donothing(e)}>parametres avancés</button>
        </div> */}
        <div className="rowb">
          <button type="submit" className="buildb" onClick={onSubmit} >
            <img src={emptylogo} alt="Logo" height={"35px"} ></img>
            <label id="u">BUILD</label>
            <img src={buildlogo} alt="Logo" height={"35px"}></img>   </button> 
        </div>
        <div className="rowb">
        </div>
      </form>
      
        
       
        </div>
    );
  
  
  }
export default Build;