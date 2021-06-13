# This file stores collection of computation functions
# Created: 2021.02.07

# import libraries
import numpy as np
import pandas as pd
from scipy import stats


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

def compute_returns(returns, freq):
    """
    Function computes an asset's returns given a particular frequency
    
    Input:
    returns : a list of values as a pandas Series (financial asset returns)
    
    Output:
    Financial returns computed at the specified frequency (as a pandas Series)
    """
    if freq == "1d":
        return np.log(returns / returns.shift(1))
    elif freq == "1m":
        return np.log(returns / returns.shift(20))
    else:
        return "Error during the computation of financial returns. Check inputs."

def compute_value_at_risk(returns, conf_level, time_horizon):
    """
    Function computes an asset's Value at Risk (VaR)
    
    Input:
    returns : a list of values as a pandas Series (financial asset returns)
    conf_level : the confidence level at which to compute VaR
    time_horizon : the time horizon over which to compute VaR
    
    Output:
    Rolling VaR series at the specified confidence level and time horizon
    """
    # compute the rolling mean
    rolling_mean = returns.rolling(window=time_horizon).mean()
    rolling_stdev = returns.rolling(window=time_horizon).std()

    conf_quantile = stats.norm.ppf(1 - conf_level) # quantile (i.e. inverse CDF)

    # VaR for the ith ticker return series
    rolling_var = rolling_mean * T - conf_quantile * rolling_stdev * np.sqrt(T)
    return rolling_var

def compute_cond_value_at_risk(returns, conf_level, time_horizon):
    """
    Function computes an asset's Conditional Value at Risk (CVaR)
    
    Input:
    returns : a list of values as a pandas Series (financial asset returns)
    conf_level : the confidence level at which to compute CVaR
    time_horizon : the time horizon over which to compute CVaR
    
    Output:
    Rolling CVaR series at the specified confidence level and time horizon
    """
    
    # compute the rolling mean
    rolling_mean = returns.rolling(window=time_horizon).mean()
    rolling_stdev = returns.rolling(window=time_horizon).std()
    
    conf_quantile = stats.norm.ppf(1 - conf_level) # quantile (i.e. inverse CDF)
    conf_quantile_cvar = np.exp(-(conf_quantile**2)/2) / ((1 - conf_level) * np.sqrt(2 * np.pi))
    
    rolling_cvar = rolling_mean - conf_quantile_cvar * rolling_stdev
    return rolling_cvar


# TEST: "compute_value_at_risk" function (Value-at-Risk)
T = 10  # Time horizon
conf_level = 0.99 # Confidence level

sample_returns = pd.read_csv("Investing Data/daily_returns_2021-05-17.csv", usecols=["Date", "F"], index_col="Date")
compute_value_at_risk(sample_returns["F"], conf_level, T)
compute_cond_value_at_risk(sample_returns["F"], conf_level, T)
