import fetch from 'isomorphic-unfetch'

const getPriceUrl = coin =>
  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD,EUR,GBP,JPY`

const getHistoryUrl = coin =>
  `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=10&aggregate=3`

// API for Live Price

function fetchSpotPrices(coin) {
  const url = getPriceUrl(coin)

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(currency => {
        resolve(currency.DISPLAY[coin])
      })
      .catch(err => reject(err))
  })
}

// API for Price History

function fetchPriceHistory(coin) {
  const url = getHistoryUrl(coin)

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(spotedHistory => {
        resolve(spotedHistory)
      })
      .catch(err => reject(err))
  })
}

export { fetchSpotPrices, fetchPriceHistory }
