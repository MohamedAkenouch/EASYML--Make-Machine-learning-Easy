import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import styles from './DivHeightAnimation.module.css';
import { BsFillArrowDownCircleFill as IconDown} from "react-icons/bs";
import { BsFillArrowUpCircleFill as IconUp} from "react-icons/bs";

 
export default class DivHeightAnimation extends Component {

  state = {
    height: 400,
    iconDown: true,
  };
 
  toggle = () => {
    const { height, iconDown } = this.state;
 
    this.setState({
      height: height === 400 ? 'auto' : 400,
      iconDown: !iconDown,
    });
  };
 
  render() {
    const { height, iconDown } = this.state;
 
    return (
      <div className='text-center position-relative'>
        <AnimateHeight
          id='example-panel'
          duration={ 500 }
          height={ height } // see props documentation below
        >
          <div className='container-md p-2'>
                <div className={styles.bgDeterm}>
                    <h3 className={styles.dHeader}>Determining the Best Learning Model</h3>
                    <p className={styles.text1}>According to IBM :<a className={styles.machineLearningForDummiesPDF} href='https://www.ibm.com/downloads/cas/GB8ZMQZ3' target='_blank' rel="noopener noreferrer" >Machine Learning for dummies.</a> </p>
                    <div className='text-center'>
                        <p className={styles.text2}>
                            One of the most complex tasks for applying machine learning
                            to a business problem is selecting the most appropriate model.
                            Selecting the most appropriate model is the best starting point
                            in the journey to making machine learning an indispensable tool
                            for predicting business outcomes. One of the most complex issues
                            with selecting a model is to make sure that the model will perform
                            well in the future when new data is introduced.       
                        </p>
                        <p className={styles.text2}>
                            The selected algorithm has to be generalized enough that it can
                            be accurate with new data. If the algorithm is too tightly tied to
                            an existing set of data, this type of overfitting will cause problems
                            in the future. Therefore, when you select an algorithm, begin
                            by making sure that the data set being used is a representative
                            sample of your information. Your pilot will be much more successful if your data set is a representative sample of the aspect
                            of the business that you are focused on. For example, you might
                            begin selecting an algorithm by selecting a sample data set that
                            is well known in your organization. As a next step, you can add a
                            data set from a totally different source that could be relevant to
                            your hypothesis. How does the algorithm you’ve selected predict
                            outcomes from both the well-understood data set and the new
                            data set?
                        </p>
                        <p className={styles.text2}>
                            <br /><strong>Tools to determine algorithm selection</strong><br />
                            It is definitely not easy to select the algorithm that is best suited
                            for your data and your challenge. Luckily, the market is beginning
                            to recognize that in order to move forward, tools need to exist
                            to help with algorithm selection. How do you choose the right
                            model? It is a difficult problem.
                            While overfitting may be one problem, a more serious problem is
                            that models lose accuracy over time. Therefore, you have to continuously retrain the model as the data changes. Selecting the right
                            algorithm can be best accomplished by automating the selection
                            of an algorithm. Take the example of a classification algorithm.
                            There are as many as 40 different classifier algorithms. These different algorithms can be combined depending on the approach
                            the data scientist is using. Therefore, you can have hundreds of
                            combinations to choose from. If your data scientists need to test
                            for potentially valid algorithms, it could take a long time to pick
                            the best ones. Using an automation tool enables your scientists to
                            more quickly determine the best combination of algorithms that
                            will provide the highest score and the best fit for your data.
                            Automation tools are important not just because of the complexity of the algorithms but also because you have to make sure that
                            the algorithms you select to build your models will not impact
                            data latency and data consistency.
                            <br /><strong>Approaching tool selection</strong><br />
                            A variety of open-source tools are intended to help data scientists
                            select the right algorithm. These tools are often tied directly to
                            the language (Python, R, Java, and so on) being used. Why should
                            data scientists use tools for algorithm selection? Many different
                            machine learning models may all be useful in solving problems. If
                            a data scientist can experiment with different algorithms, he will
                            be able to improve the ability of models to predict outcomes and
                            create models that will scale.
                        </p>
                        <br /><br />

                    </div>
                </div>
            </div>
        </AnimateHeight>
        <button className={styles.btnConRead} onClick={ this.toggle }> {iconDown ? <span>Continue reading <IconDown /></span> : <span>Close <IconUp /></span>} </button>
      </div>
    );
  }
}