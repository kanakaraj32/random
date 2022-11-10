import './index.css'

const Text = props => {
  const {detail, tabclick} = props
  const {displayText, tabId} = detail
  const click = () => {
    tabclick(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={click}>
        {displayText}
      </button>
    </li>
  )
}
export default Text
