import React from "react"

const Comments = ({comments}) => {
  if (!comments || !comments.length) {
    return (
      <p>No comments yet.</p>
    )
  }

  return (
    comments.map(comment => (
      <div key={comment.node.id}>
        <p>
        Name: {comment.node.name}
        <br />
        Comment: {comment.node.message}
        <br />
        Date: {comment.node.date}
        </p>
      </div>
    ))
  )
}

export default Comments
