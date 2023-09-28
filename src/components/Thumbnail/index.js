import './index.css'

const Thumbnail = props => {
  const {each, matching} = props

  const {id, thumbnailUrl, category} = each

  const onClickThumbnail = () => {
    matching(id)
  }

  return (
    <li className="list-style">
      <button type="button">
        <img
          onClick={onClickThumbnail}
          className="thumbnail-img"
          src={thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default Thumbnail
