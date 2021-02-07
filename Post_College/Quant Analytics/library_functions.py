# This file stores collection of computation functions
# Created: 2021.02.07

# import libraries
import numpy as np

# Expected Return
def compute_expected_return(returns):
    """
    Function computes an asset's expected return
    
    Input:
    returns : a list of values (returns)
    
    Output:
    The expected return (singular value) as a percent
    """
    n = len(returns)  # number of observations
    return ((1/n) * np.sum(returns)) * 100

# Variance
def compute_var_return(returns, expected_return):
    """
    Function computes an asset's variance
    
    Inputs:
    returns : a list of values (asset returns)
    expected_return : a singular value (asset expected return)
    
    Output:
    The variance (singular value) as a percent
    """
    n = len(returns)  # number of observations
    return (1/(n-1)) * np.sum((returns - expected_return)**2) * 100

# Covariance
def compute_covariance(ri, exp_return_i, rj, exp_return_j):
    """
    Function computes the covariance between two assets i and j
    
    Inputs:
    ri: returns of asset i
    exp_return_i: the expected return of asset i
    rj: returns of asset j
    exp_return_j: the expected return of asset j
    
    Output:
    The covariance (singular value)
    """
    n = len(ri)
    return (1/(n-1)) * np.sum((ri - exp_return_i) * (rj - exp_return_j))

# Correlation Coefficient
def compute_correlation_coefficient(cov, stdev_i, stdev_j, i, j):
    """
    Function computes the correlation coefficient between two assets i and j
    
    Inputs:
    cov: the covariance between assets i and j
    stdev_i: the standard deviation of asset i
    stdev_j: the standard deviation of asset j
    i: the index of asset i
    j: the index of asset j
    
    Output:
    The correlation coefficient (singular value)
    """
    if i == j:
        return 1
    else:
        return cov / (stdev_i * stdev_j)
