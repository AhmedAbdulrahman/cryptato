import React from 'react'
import './styles.css'

const TimeDuration = ({ options, selectedMode, handleOptionClick }) => (
  <div className="modes">
    {options.map(option => {
      const computedClass =
        option.key === selectedMode ? 'modeItem active' : 'modeItem'
      return (
        <div
          className={computedClass}
          key={option.key}
          onClick={() => handleOptionClick(option.key)}
        >
          <div>{option.codename}</div>
        </div>
      )
    })}
  </div>
)

export default TimeDuration
