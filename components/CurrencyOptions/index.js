import React from 'react'
import './styles.css'

const CurrencyOptions = () => (
  <div className="table_center">
    <div className="drop-down">
      <div id="dropDown" className="drop-down__button">
        <span className="drop-down__name">Select Currncy</span>
      </div>

      <div className="drop-down__menu-box">
        <ul className="drop-down__menu">
          <li className="drop-down__item">USD </li>
          <li className="drop-down__item">EUR </li>
          <li className="drop-down__item">GBP </li>
          <li className="drop-down__item">JPY </li>
        </ul>
      </div>
    </div>
  </div>
)

export default CurrencyOptions
