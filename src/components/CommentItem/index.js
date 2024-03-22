import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props

  const {
    id,
    name,
    comment,
    date,
    isLiked,
    initialClassName,
    onToggle,
    onDelete,
  } = commentDetails

  const postTime = formatDistanceToNow(date)
  const likedText = isLiked ? 'button active' : 'button'

  const likeClassName = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    onToggle(id)
  }

  const onDeleteItem = id => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>

        <div className="user-name-container">
          <p className="name">{name}</p>
          <p className="time">{postTime} ago</p>
        </div>
        <p className="comment">{comment}</p>
      </div>
      <div className="button-container">
        <div className="like-container">
          <img src={likeClassName} className="like" alt="like" />
          <button className={likeClassName} type="button" onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDeleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr" />
    </li>
  )
}

export default CommentItem
