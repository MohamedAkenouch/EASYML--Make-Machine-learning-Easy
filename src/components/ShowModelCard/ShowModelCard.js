import React, { Component,useState } from 'react';
import AnimateHeight from 'react-animate-height';
import styles from './ShowModelCard.module.css';
import { BsFillArrowDownCircleFill as IconDown} from "react-icons/bs";
import { BsFillArrowUpCircleFill as IconUp} from "react-icons/bs";
import { BsFillArrowRightCircleFill as IconRight} from "react-icons/bs";
import { Link } from 'react-router-dom';
import rfrImage from '../../assets/images/rfr-daigramme.png';

 const ShowModelCard = ({id,title,description,user}) => {
console.log(user)
 
  const [height, setHeight] = useState(400);
  const [iconDown , setIconDown ] = useState(true);

  const toggle = () => {

      height === 400 ? setHeight('auto') : setHeight(400);
      setIconDown(!iconDown)
  };
 

 
    return (
      <div className='text-center position-relative mb-4'>
        <AnimateHeight
          id='example-panel'
          duration={ 500 }
          height={ height } // see props documentation below
        >
            <div className='container-md p-2'>
                <div className={styles.modelDetails}>

                    <h2 className={styles.modelTitle}>{title}</h2>
                    
                    <p className={styles.modelDesc}>
                        {description}
                    </p>
                </div>
            </div>
        </AnimateHeight>
        <button className={styles.readMore} onClick={toggle}>{iconDown ? "Read more" : "Close"} {iconDown ? <IconDown /> : <IconUp />}</button>
        {(user===undefined || user===null)?<Link className={styles.exploitNow} to={`/signin`}>Exploit now <IconRight /></Link>:<Link className={styles.exploitNow} to={`/build/${id}`}>Exploit now <IconRight /></Link>}
      </div>
    );
  
}
export default ShowModelCard;