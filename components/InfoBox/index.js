import React from 'react'
import './styles.css'

const InfoBox = ({ currencyUSD, currencyEUR, currencyGBP, currencyJPY }) => (
  <div className="container">
    <div className="box">
      <span className="title">USD</span>
      <h2 className="number">{currencyUSD.PRICE}</h2>
    </div>
    <div className="box">
      <span className="title">EUR</span>
      <h2 className="number">{currencyEUR.PRICE}</h2>
    </div>
    <div className="box">
      <span className="title">GBP</span>
      <h2 className="number">{currencyGBP.PRICE}</h2>
    </div>
    <div className="box">
      <span className="title">JPY</span>
      <h2 className="number">{currencyJPY.PRICE}</h2>
    </div>
  </div>
)

export default InfoBox
