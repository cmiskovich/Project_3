# Project_3

# Primary application file

Develop NFTs to be sold and when you claim the NFT at a location you will receive complimentary canabis.  This is done to comply with District of Columbia's law that does not allow you to sell canabis out right but you can sell items and have complimentary canabis accompany the purchased item.  This will provide convenince to users that can purchase an NFT and then present it to the store for their complimentary canabis.  Convenience is provided to the customer by not having to wait in line at the location and to the store owner by not having to spend time with clients but can have complimentary canabis available when they arrive.


---

## Technologies

The following Technologies were used to develop this program:

Python 
    Version 3.9.7

Terminal
    Version 2.12.5 (444)
 
Git version 2.24.0.windows.2

Visual Studio Code
    Version: 1.66.2 (Universal)
    Commit: dfd34e8260c270da74b5c2d86d61aee4b6d56977
    Date: 2022-04-11T07:49:20.994Z
    Electron: 17.2.0
    Chromium: 98.0.4758.109
    Node.js: 16.13.0
    V8: 9.8.177.11-electron.0
    OS: Darwin x64 21.4.0
    
    
Remix Etherium IDE

Solidity
    


---

## General information about analysis.

We pulled data for the past year for the our four stocks which we labeled mind_trip_etf (MNMD, CYBN, ATAI, and CMPS), along with the psychedelic ETF (PSYK) labeled psyk_psychedelics_eft, and also the S&P 500 (SPY) labeled sp500.  After that we created data frames for each of them with a datetime stamp and closing price and plotted closing prices for each segment.

Mind Trip ETF:
![Mind Trip ETF closing prices](/Mind_trip_ETF_closing_prices.png)


PSYK ETF:
![PSYK ETF](/PSYK_ETF_CLOSE.png)

S&P 500:
![SP500](/SP500_Close.png)


We then ran daily returns for the three segments and plotted them:

![Daily Returns](/Daily_Returns.png)

Finally we modeled, fit and predicted the next 90 days for each segment:
![90 day forcasts](/90_DAY_FORCAST.png)

You can see in the visualizations that the Mind Trip ETF is increasing slightly over the next 90 days, S&P 500 is forcasted to decrease over the next 90 days, meanwhile the PSYK ETF is forcasted to increase significantly over the next 90 days.


---

## Presentation Link

[Presentation](https://docs.google.com/presentation/d/1hUbEMa7-H6ocAlZyrIXMvV8RSfoBfhsU1VeNEUhjuNA/edit#slide=id.g1f87997393_0_782)

---

## Information about datasets

Create the alpaca API object:

alpaca

Format current data as ISO format:

start_date, end_date

Set the tickers for psychedelic stocks and ETF:

psyche_tickers

Obtain 1 year worth of data for tickers:

psychedelics_stocks

Reorganize Dataframe and separate ticker data:

MNMD, CYBN, ATAI, CMPS, PSYK

Concatenate DataFrames for psychedelic stocks using MNMD, CYBN, ATAI, CMPS:

mind_trip_etf

Plot closing prices of mind_trip_etf:

MNMD_plot, CYBN_plot, ATAI_plot, CMPS_plot

Composite plots of mind_trip_etf stocks:

mind_trip_composite_plots

Daily returns for mind_trip_etf:

mind_trip_daily_returns_df

Plot daily returns:

mind_trip_daily_returns_plot

Create DataFrame for psychedelic ETF:

psyk_psychedelics_eft

Plot closing prices for PSYK ETF:

psyk_plot

Plot daily returns for PSYK ETF:

psyk_daily_return_plot

Create DataFrame for S&P 500:

sp500

Plot S&P 500 closing price:

sp_500_daily_return_plot

Average closing price for the mind_trip_etf stocks:

mind_trip_average

Model and fit model for mind_trip_etf and later plot pedictions:

mind_trip_model

Creat a future data frame to hold predictions for mind_trip_etf:

future_mind_trip

Predict the trend using data from future_mind_trip:

forecast_mind_trip_etf

Closing prices for PSYK:

psyk_closing_prices_df

Model and fit model for PSYK and later plot pedictions:

psyk_model

Creat a future data frame to hold predictions for psyk_closing_prices_df:

future_psyk_df

Predict the trend using data from future_psyk_df:

forecast_psyk

Closing prices for S&P 500:

sp500_close_df

Model and fit model for S&P 500 and later plot pedictions:

sp500_model

Creat a future data frame to hold predictions for sp500_close_df:

future_sp500_df

Predict the trend using data from future_psyk_df:

forecast_sp500

---

## Libraries used in analysis

colab_env

pandas

os

requests

hvplot

holoviews

alpaca_trade_api

datetime

numpy

dotenv

prophet

google.colab

matplotlib

---

## Contributors


**Chris Miskovich**

Contact Information:

Email: cmiskovich@verizon.net

[LinkedIn](https://www.linkedin.com/in/christopher-miskovich-9a61b0234/) 



**Antiwan Maxwell**

Contact Information:

Email: antiwan.maxwell@outlook.com

[LinkedIn](https://www.linkedin.com/in/antiwan-maxwell-205a11233/) 



**Joshua Mitchell**

Contact Information:

Email: joshuamitchell5678@gmail.com



**KaBria Broadwater**

Contact Information:

Email: KaBria.Broadwater@gmail.com

[LinkedIn](https://www.linkedin.com/in/kabriabroadwater/)




---

## License

[MIT](/license.txt)
