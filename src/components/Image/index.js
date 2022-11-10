import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {thumbnailUrl} = tabDetails
  return (
    <li className="li">
      <img src={thumbnailUrl} alt="thumbnail" className="img" />
    </li>
  )
}
export default TabItem
