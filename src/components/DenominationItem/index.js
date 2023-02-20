// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdrawal} = props
  const {value} = denominationDetails

  const onUpdateDetails = () => {
    onWithdrawal(value)
  }

  return (
    <li className="list-item-container">
      <button type="button" className="button" onClick={onUpdateDetails}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
