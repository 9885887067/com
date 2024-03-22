import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    textAreaInput: '',
  }

  onChangeInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangetextArea = event => {
    this.setState({
      textAreaInput: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, textAreaInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: textAreaInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  OnToggle = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !prevState.isLiked}
        }
        return each
      }),
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  render() {
    const {commentsList,nameInput, textAreaInput} = this.state

    return (
      <div className="app-container">
        <div className="comment-container">
          <h1 className="heading">Comments</h1>
          <div className="form-container">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                onChange={this.onChangeInput}
                value={nameInput}
              />
              <textarea
                rows="8"
                type="textarea"
                placeholder="Your Comment"
                className="textarea"
                onChange={this.onChangetextArea}
                value={textAreaInput}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>

          <hr className="separator" />

          <p className="desc">
            {commentsList.length}
            <span className="span">Comments</span>
          </p>

          <ul className="list-container">
            {commentsList.map(comment => (
              <CommentItem
                commentDetails={comment}
                key={comment.id}
                onToggle={this.OnToggle}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
