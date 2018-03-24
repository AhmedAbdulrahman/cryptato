import React from 'react'
import './styles.css'

const Tabs = ({ options, selectedKey, onTabClick }) => (
  <div className="tabs">
    <h2 className="logo">Cryptato</h2>
    <div
      style={{
        flex: 1,
        display: 'flex',
      }}
    >
      {options.map(option => {
        const computedClass =
          option.key === selectedKey ? 'tabItem selected' : 'tabItem'
        return (
          <div
            className={computedClass}
            key={option.key}
            onClick={() => onTabClick(option.key)}
          >
            <div>{option.name}</div>
          </div>
        )
      })}
    </div>
  </div>
)

export default Tabs
