// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onWithdrawal = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="background">
        <div className="card-container">
          <div className="name-container">
            <p className="letter">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amt-container">
              <p className="amount">{balance}</p>
              <p className="currency">in Rupees</p>
            </div>
          </div>
          <p className="withdrawal">Withdraw</p>
          <p className="about">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denominationDetails={each}
                onWithdrawal={this.onWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
