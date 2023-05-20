import React , {useState} from 'react'
import Footer from "../components/Footer/Footer";
import HeaderLite from '../components/HeaderLite/HeaderLite';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import { useParams } from "react-router-dom";
import bgModels from '../assets/images/bg-models.svg';
import ShowModelCard from '../components/ShowModelCard/ShowModelCard';

import { useSelector } from "react-redux";

function ShowModel () {
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user)
    const { id } = useParams();
    const Model = useSelector((state) =>(state.Models.filter(model => model._id===id) ));

    return (
        <>
            <HeaderLite />
            {
                Model.map(
                    (model) => (
                        <>
                            <ImageHeaderLite image={bgModels} title={`Model : ${model.name}`}/>
                            <ShowModelCard user={user} id={model._id} title = {model.name} description = {model.description} />
                        </>
            
                    )
                )
            }
            <Footer />
        </>
    )
  

};
export default ShowModel;