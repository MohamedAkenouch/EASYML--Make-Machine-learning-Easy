from ast import Break
from statistics import linear_regression
import sys
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle
import os

tocken=sys.argv[1]
t=tocken
tobepredicted = sys.argv[2]
dir_path = os.path.dirname(os.path.realpath(__file__))
tocken = dir_path+"\\..\\builtmodels\\"+str(tocken)+".pickle"

   
X = pd.read_csv(tobepredicted,";")

regressor = LinearRegression()
regressor = pickle.load( open( tocken, "rb" ) )

prediction= regressor.predict(X)

filepath=dir_path = os.path.dirname(os.path.realpath(__file__))+"\\..\\prediction\\predictedvalues\\"+str(t)+'.csv'
np.savetxt(filepath, prediction, fmt = '%d', delimiter=',')

print(filepath)


