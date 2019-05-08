import React from "react"

const Comments = ({comments}) => {
  return (
    <>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.node.id}>
          <p>
          Name: {comment.node.name}
          <br />
          Comment: {comment.node.message}
          <br />
          Date: {comment.node.date}
          </p>
        </div>
      ))}
    </>
  )
}

export default Comments
