import React from 'react'
import format from 'date-fns/format'
import Chart from '../Chart'
import Tabs from '../Tabs'
import InfoBox from '../InfoBox'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: [
        { key: 'BTC', name: 'Bitcoin' },
        { key: 'ETH', name: 'Ethereum' },
        { key: 'XRP', name: 'XRipple' },
      ],
      // Time duration constants
      duration: [
        { key: 'HOUR', codename: 'Hourly', humanize: 'since an hour ago' },
        { key: 'DAY', codename: 'Daily', humanize: 'since yesterday' },
        { key: 'WEEK', codename: 'Weekly', humanize: 'since last week' },
        { key: 'MONTH', codename: 'Monthly', humanize: 'since last month' },
        { key: 'YEAR', codename: 'Yearly', humanize: 'since last year' },
      ],
      selectedCurrencyKey: 'BTC',
      selectedDurationKey: 'HOUR',
    }
  }

  historyData = () => {
    const { spotedHistory, duration } = this.props
    return spotedHistory.map(history => {
      const date = new Date(history.time * 1000)
      return {
        time: ['HOUR', 'DAY'].includes(duration)
          ? date.toLocaleTimeString()
          : format(date, 'MMM DD, YYYY'),
        value: history.high,
      }
    })
  }

  handleTabClick = key => {
    this.setState({
      selectedCurrencyKey: key,
    })
    this.props.handleCoinChange(key)
  }
  handleTimeDurationClick = key => {
    this.setState({
      selectedDurationKey: key,
    })
    this.props.handleDurationChange(this.state.selectedCurrencyKey, key)
  }
  render() {
    const {
      handleCoinChange,
      handleDurationChange,
      duration,
      USD,
      EUR,
      GBP,
      JPY,
    } = this.props
    return (
      <React.Fragment>
        <Tabs
          options={this.state.currency}
          selectedKey={this.state.selectedCurrencyKey}
          onTabClick={this.handleTabClick}
        />
        <InfoBox
          currencyUSD={USD}
          currencyEUR={EUR}
          currencyGBP={GBP}
          currencyJPY={JPY}
        />

        <Chart
          mode={this.state.duration}
          modeKey={this.state.selectedDurationKey}
          onClickMode={this.handleTimeDurationClick}
          historicalData={this.historyData()}
        />
      </React.Fragment>
    )
  }
}

export default Dashboard
