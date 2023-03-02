import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachCrypto => ({
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
      id: eachCrypto.id,
      currencyLogo: eachCrypto.currency_logo,
    }))
    this.setState({cryptoCurrenciesList: formattedData, isLoading: false})
  }

  renderCryptoCurrencies = () => {
    const {cryptoCurrenciesList} = this.state
    return (
      <ul className="table">
        <li className="row header">
          <p className="cell coin-type">Coin Type</p>
          <p className="cell">USD</p>
          <p className="cell">EURO</p>
        </li>
        {cryptoCurrenciesList.map(eachList => (
          <CryptocurrencyItem
            cryptocurrencyDetails={eachList}
            key={eachList.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="responsive-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoCurrencies()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
