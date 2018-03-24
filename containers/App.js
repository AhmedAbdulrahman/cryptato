import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { namespaceConfig } from 'fast-redux'
import { fetchSpotPrices, fetchPriceHistory } from '../utils/api'

import Dashboard from '../components/Dashboard'

const { action, getState: getCurrencyState } = namespaceConfig('currencies', {
  isLoading: false,
  USD: {},
  EUR: {},
  GBP: {},
  JPY: {},
  duration: 'HOUR',
  spotedHistory: [],
})

const setCurrency = action('setCurrency', (state, results) => ({
  ...state,
  ...results,
}))

const setDuration = action('setDuration', (state, duration) => ({
  ...state,
  duration,
}))

const setSpotedHistory = action('setSpotedHistory', (state, spotedHistory) => ({
  ...state,
  spotedHistory,
}))

export const onLoad = json => async dispatch => {
  dispatch(
    setCurrency({
      USD: json.USD,
      EUR: json.EUR,
      GBP: json.GBP,
      JPY: json.JPY,
      spotedHistory: json.Data,
    }),
  )
}

const handleCoinChange = coin => async (dispatch, getState) => {
  await Promise.all([
    fetchSpotPrices(coin),
    fetchPriceHistory(coin, getCurrencyState(getState()).duration),
  ])
    .then(([livePrice, history]) => {
      const json = {
        ...livePrice,
        ...history,
      }
      dispatch(
        setCurrency({
          USD: json.USD,
          EUR: json.EUR,
          GBP: json.GBP,
          JPY: json.JPY,
          spotedHistory: json.Data,
        }),
      )
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

const handleDurationChange = (coin, duration) => async dispatch => {
  dispatch(setDuration(duration))
  await Promise.resolve(fetchPriceHistory(coin, duration))
    .then(response => dispatch(setSpotedHistory(response.Data)))
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

const mapStateToProps = getCurrencyState

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleCoinChange, handleDurationChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
