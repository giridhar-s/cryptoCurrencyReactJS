import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptocurrencyDetails

  return (
    <li className="row">
      <div className="cell coin-type">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="cell">{usdValue}</p>
      <p className="cell">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
