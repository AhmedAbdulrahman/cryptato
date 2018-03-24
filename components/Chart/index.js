import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import TimeDuration from '../TimeDuration'
import CurrencyOptions from '../CurrencyOptions'
import './styles.css'

const Chart = ({ mode, modeKey, onClickMode, historicalData }) => (
  <div className="chart">
    <div className="chart-container">
      <div className="options">
        <TimeDuration
          options={mode}
          selectedMode={modeKey}
          handleOptionClick={onClickMode}
        />
        <CurrencyOptions />
      </div>
      <ResponsiveContainer>
        <AreaChart
          data={historicalData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#084af0" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#084af0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            stroke="#5F5D7B"
            tick={{ transform: 'translate(0, 10)' }}
          />
          <YAxis
            basevalue="auto"
            type="number"
            domain={[
              dataMin => (Number.parseFloat(dataMin) * 0.999).toFixed(2),
              dataMax => (Number.parseFloat(dataMax) * 1.001).toFixed(2),
            ]}
            width={70}
            stroke="#5F5D7B"
            tick={{ transform: 'translate(-10, 0)' }}
          />
          <CartesianGrid
            stroke="rgba(247,249,251,.10)"
            strokeWidth={1}
            vertical={false}
            strokeDasharray="3 6"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#385DFF"
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
)

export default Chart
