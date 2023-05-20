import sys
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score,mean_squared_error
import math
import pickle
import uuid
import os

model=sys.argv[1]
features = sys.argv[2]
targets = sys.argv[3]
s=sys.argv[4]

"""
def evaluate(model, test_features, test_labels):
    test_labels=np.array(test_labels).ravel()
    predictions = model.predict(test_features)
    errors = abs(predictions - test_labels)
    mape = 100 * np.mean(errors / test_labels)
    accuracy = 100 - mape
    print('Model Performance')
    print('Average Error: {:0.4f} degrees.'.format(np.mean(errors)))
    print('Accuracy = {:0.2f}%.'.format(accuracy))
    
    return accuracy

if s :
    sc_X = StandardScaler()
    X_train = sc_X.fit_transform(X_train)
    X_test = sc_X.fit_transform(X_test)
"""
"""
print(evaluate(regressor,X_test,Y_test))
print("RMSE training =","{:.2f}".format(math.sqrt(mean_squared_error(Y1,regressor.predict(X1)))))
print("RMSE testing =","{:.2f}".format(math.sqrt(mean_squared_error(Y2,regressor.predict(X2)))))
print('Percentage accuracy for linear regression model training: ' , "{:.2f}".format((1-np.mean(np.abs((Y1-regressor.predict(X1)))/Y1))*100),'%')
os.path.abspath(modeluniqname)
"""


X = pd.read_csv(features,";")
Y = pd.read_csv(targets,";")
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2, random_state = 0)
regressor = LinearRegression()
regressor.fit(X_train, Y_train)

X1=np.array(X_train)
X2=np.array(X_test)
Y1=np.array(Y_train)
Y2=np.array(Y_test)



print('testing accuracy : ' , "{:.2f}".format((1-np.mean(np.abs((Y2-regressor.predict(X2)))/Y2))*100),'%')
modelname=features.split("-")[3]
tocken=str(uuid.uuid1())
#modeluniqname='./MachineLearning/builtmodels/'+model[:len(model)-2]+'-'+tocken+'.p'
modeluniqname='./MachineLearning/builtmodels/'+tocken+'.pickle'
pickle.dump( regressor, open( os.path.abspath(modeluniqname), "wb" ) )
print(tocken)


