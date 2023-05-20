import React, {useEffect} from "react";
import lrImage from '../assets/images/lr-img.svg';
import rfrImage from '../assets/images/rfr-img.svg';
import svrImage from '../assets/images/svr-img.svg';
import Header from "../components/Header/Header";
import UnderLineText from "../components/UnderLineText/UnderLineText";
import IconText from "../components/IconText/IconText";
import expertsIcon from '../assets/images/expertsIcon.svg';
import marketPullIcon from '../assets/images/marketPullIcon.svg';
import easyToUseIcon from '../assets/images/easyToUseIcon.svg';
import styles from '../assets/styles/Home.module.css';
import EllipseText from "../components/EllipseText/EllipseText";
import ellipse from '../assets/images/ellipse.svg';
import BtnViewMore from "../components/BtnViewMore/BtnViewMore";
import ModelCard from "../components/ModelCard/ModelCard";
import BlogCard  from "../components/BlogCard/BlogCard";
import Footer from "../components/Footer/Footer";

import { CircularProgress } from "@material-ui/core";

import { getBlogs } from '../actions/blogs';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Home = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);
    
    const blogs = useSelector((state) => state.blogs);
    console.log(blogs);

    const regressionModels = [
        {
            id: 1,
            title: "Linear Regression",
            image: lrImage
        }, 
        {
            id: 2,
            title: "Random Forest Regression",
            image: rfrImage
        }, 
        {
            id: 3,
            title: "Support Vector Regression",
            image: svrImage
        }
    ];
    const classificationModels = [
        {
            id: 1,
            title: "Linear Regression",
            image: lrImage
        }, 
        {
            id: 2,
            title: "Linear Support Vector Machine",
            image: svrImage
        }, 
        {
            id: 3,
            title: "Random Forest Classifier",
            image: rfrImage
        }
    ];
    

    return(
        <React.Fragment>
            <Header />
            <UnderLineText text="Why EasyML?"/>
            <div className={styles.whyEasyML}>
                <div className="container-md text-center">
                    <div className={styles.displayNone}>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                        <div className='row'>
                            <IconText column='col-lg-12' 
                                icon={expertsIcon}
                                title="Experts"
                                text="Learn from experts passionate about machine learning"
                            />
                        </div>
                        <div className='row mb-4'>
                            <IconText column='col-lg-4' 
                                icon={marketPullIcon}
                                title="Market pull"
                                text="Profitable and growing user base"
                            />
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                            <IconText column='' 
                                    icon={easyToUseIcon}
                                    title="Easy to use"
                                    text="Train your model with few steps"
                            /> 
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                        <div className='row mb-5'>
                            <div className="col-lg-12"></div>
                        </div>
                    </div>
                    <div className={styles.displaySlides}>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <IconText column='col-lg-12' 
                                        icon={expertsIcon}
                                        title="Experts"
                                        text="Learn from experts passionate about machine learning"
                                    />
                                </div>
                                <div class="carousel-item">
                                    <IconText column='col-lg-4' 
                                        icon={marketPullIcon}
                                        title="Market pull"
                                        text="Profitable and growing user base"
                                    />
                                </div>
                                <div class="carousel-item">
                                    <IconText column='' 
                                            icon={easyToUseIcon}
                                            title="Easy to use"
                                            text="Train your model with few steps"
                                    />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.numbersRating}>
                <div className={styles.displayNone}>
                    <div className="container-md">
                        <div className='row'>
                            <EllipseText 
                                ellipse={ellipse}
                                clName="col-md-3 text-center"
                                rang="10,679" text="Users that joined us"
                            />
                            <EllipseText 
                                ellipse={ellipse}
                                clName="col-md-3 text-center"
                                rang="2,679" text="People made their subscription"
                            />
                            <EllipseText 
                                ellipse={ellipse}
                                clName="col-md-3 text-center"
                                rang="50,000" text="More than 50,000 people visit our site every month"
                            />
                            <EllipseText 
                                ellipse={ellipse}
                                clName="col-md-3 text-center"
                                rang="#10" text="Ranked among the top 10 growing online startups in North Africa"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.displaySlides}>
                    <div id="carouselExampleIndicators" className="carousel slide text-center" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <EllipseText 
                                ellipse={ellipse}
                                rang="10,679" text="Users that joined us"
                            />
                        </div>
                        <div className="carousel-item">
                            <EllipseText 
                                ellipse={ellipse}
                                rang="2,679" text="People made their subscription"
                            />
                        </div>
                        <div className="carousel-item">
                            <EllipseText 
                                ellipse={ellipse}
                                rang="50,000" text="More than 50,000 people visit our site every month"
                            />
                        </div>
                        <div className="carousel-item">
                            <EllipseText 
                                ellipse={ellipse}
                                rang="#10" text="Ranked among the top 10 growing online startups in North Africa"
                            />
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.ourModels}>
                <div className='container-md'>
                    <UnderLineText text="Our Models"/>
                    <h2>Regression models</h2>
                    <div className="regression-models row">
                        {
                            regressionModels.map(
                                (model) => (
                                    <div key={model.id} className="col-md-4">
                                        <ModelCard image={model.image} title={model.title}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <h2>Classification models</h2>
                    <div className="classification-models row">
                        {
                            classificationModels.map(
                                (model) => (
                                    <div key={model.id} className="col-md-4">
                                        <ModelCard image={model.image} title={model.title}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <BtnViewMore link="/models"/>
                </div>
            </div>
            <UnderLineText text="Blogs"/>
            {
                !blogs.length ? <div className="text-center"><CircularProgress /></div> :
                    <div className={styles.blogs}>
                        <div className="container-md">
                            <div className="mt-4">  
                                {
                                    blogs.map(
                                        (blog) => (
                                            <div key={blog._id} className="text-center">
                                                <BlogCard image={blog.selectedFile} content={blog.content} title={blog.title} id={blog._id}/>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    <BtnViewMore link="/blogs"/> 
                </div>
            }
            <Footer />
        </React.Fragment>
    )
}

export default Home;