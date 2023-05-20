import sys
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score,mean_squared_error
import math
import pickle
import uuid
import os
from sklearn.model_selection import GridSearchCV
#str(uuid.uuid1())+
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

model=sys.argv[1]
features = sys.argv[2]
targets = sys.argv[3]
s=sys.argv[4]


X = pd.read_csv(features,";")
Y = pd.read_csv(targets,";")
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2, random_state = 0)
if s :
    sc_X = StandardScaler()
    X_train = sc_X.fit_transform(X_train)
    X_test = sc_X.fit_transform(X_test)
regressor = RandomForestRegressor()
"""
n_estimators = [int(x) for x in np.linspace(start = 200, stop = 2000, num = 10)]
max_features = ['auto', 'sqrt']
max_depth = [int(x) for x in np.linspace(10, 110, num = 11)]
max_depth.append(None)
min_samples_split = [2, 5, 10]
min_samples_leaf = [1, 2, 4]
bootstrap = [True, False]
random_grid = {'n_estimators': n_estimators,
               'max_features': max_features,
               'max_depth': max_depth,
               'min_samples_split': min_samples_split,
               'min_samples_leaf': min_samples_leaf,
               'bootstrap': bootstrap}
rf_random = RandomizedSearchCV(estimator = regressor,
      param_distributions = random_grid,
      n_iter = 100, 
      cv = 3, 
      verbose=2, 
      random_state=42, 
      n_jobs = -1)
"""
"""
param_grid = {
    'max_features': [2, 3],
    'min_samples_leaf': [3, 4, 5],
    'n_estimators': [200, 300]
}
grid_search = GridSearchCV(estimator = regressor, param_grid = param_grid, 
                          cv = 3, n_jobs = -1, verbose = 2)
grid_search.fit(X_train, np.array(Y_train).ravel())
best_grid = grid_search.best_estimator_
grid_accuracy = evaluate(best_grid, X_test, Y_test)
print('grid accuracy = ',"{:.2f}".format(grid_accuracy))
"""
regressor.fit(X_train, Y_train)





X1=np.array(X_train)
X2=np.array(X_test)
Y1=np.array(Y_train)
Y2=np.array(Y_test)
"""
print('RF accuracy :',"{:.2f}".format(evaluate(regressor, X_test, Y_test)))
print("RMSE training =","{:.2f}".format(math.sqrt(mean_squared_error(Y1,regressor.predict(X1)))))
print("RMSE testing =","{:.2f}".format(math.sqrt(mean_squared_error(Y2,regressor.predict(X2)))))
print('Percentage accuracy for Random Forest Regressor model training: ' , "{:.2f}".format((1-np.mean(np.abs((Y1-regressor.predict(X1)))/Y1))*100),'%')
print('Percentage accuracy for Random Forest Regressor model testing: ' , "{:.2f}".format((1-np.mean(np.abs((Y2-regressor.predict(X2)))/Y2))*100),'%')
modelname=features.split("-")[3]
tocken=str(uuid.uuid1())
#modeluniqname='./MachineLearning/builtmodels/'+model[:len(model)-2]+'-'+tocken+'.p'
modeluniqname='./MachineLearning/builtmodels/'+tocken+'.p'
pickle.dump( regressor, open( os.path.abspath(modeluniqname), "wb" ) )
print(os.path.abspath(modeluniqname))
"""


print('testing accuracy : ' , "{:.2f}".format((1-np.mean(np.abs((Y2-regressor.predict(X2)))/Y2))*100),'%')
modelname=features.split("-")[3]
tocken=str(uuid.uuid1())
#modeluniqname='./MachineLearning/builtmodels/'+model[:len(model)-2]+'-'+tocken+'.p'
modeluniqname='./MachineLearning/builtmodels/'+tocken+'.pickle'
pickle.dump( regressor, open( os.path.abspath(modeluniqname), "wb" ) )
print(tocken)


