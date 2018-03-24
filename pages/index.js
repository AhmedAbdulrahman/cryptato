import React from 'react'
import { reduxPage } from 'config/store'
import { fetchSpotPrices, fetchPriceHistory } from '../utils/api'

import Root from '../components/Root'
import PriceList, { onLoad } from '../containers/App'

class CurrencyPage extends React.Component {
  static async getInitialProps({ store }) {
    await Promise.all([
      fetchSpotPrices('BTC'),
      fetchPriceHistory('BTC', 'HOUR'),
    ])
      .then(([livePrice, history]) => {
        const json = {
          ...livePrice,
          ...history,
        }
        store.dispatch(onLoad(json))
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
  }

  render() {
    return (
      <Root>
        <PriceList />
      </Root>
    )
  }
}

export default reduxPage(CurrencyPage)
