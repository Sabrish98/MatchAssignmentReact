import './index.css'

const TabContainer = props => {
  const {eachTab, onTabChange} = props

  const {tabId, displayText} = eachTab

  const tabChange = () => {
    onTabChange(tabId)
  }

  return (
    <div>
      <li className="tab-list">
        <button onClick={tabChange} type="button" className="tab-button">
          <p>{displayText}</p>
        </button>
      </li>
    </div>
  )
}

export default TabContainer
