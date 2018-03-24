import fetch from 'isomorphic-unfetch'

const getPriceUrl = coin =>
  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD,EUR,GBP,JPY`

const getHistoryUrl = (coin, duration) => {
  let url
  switch (duration) {
    case 'HOUR':
      url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=10&aggregate=6`
      break
    case 'DAY':
      url = `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=USD&limit=23`
      break
    case 'WEEK':
      url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=6`
      break
    case 'MONTH':
      url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=10&aggregate=3`
      break
    case 'YEAR':
      url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=11&aggregate=30`
      break
    default:
      break
  }
  return url
}

const fetchSpotPrices = coin => {
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

const fetchPriceHistory = (coin, duration) => {
  const url = getHistoryUrl(coin, duration)

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
