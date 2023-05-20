import spawn from 'child_process';


var s=true;
function useRegression(model,feature,target) {
    
    // spawn new child process to call the python script
    const childPython = spawn.spawn('python' ,['./MachineLearning/models/'+model,model,feature,target,s]);
    // collect data from script
    var dataToSend=new Promise( (resolve,reject)=>{
        childPython.stdout.on('data', function (data) {
            dataToSend = data.toString();
            resolve(dataToSend) ;
        });
        childPython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
          });
        

    });
    return dataToSend;
}
function predict(tocken,tobepredicted) {
    
    // spawn new child process to call the python script
    const childPython = spawn.spawn('python' ,['./MachineLearning/prediction/predict.py',tocken,tobepredicted]);
    // collect data from script
    var dataToSend=new Promise( (resolve,reject)=>{
        childPython.stdout.on('data', function (data) {
            dataToSend = data.toString();
            resolve(dataToSend) ;
        });
        childPython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
          });
    });
    return dataToSend;
}




export default {useRegression,predict};