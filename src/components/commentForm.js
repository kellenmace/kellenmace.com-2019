import React, { useState } from "react"

const CommentForm = props => {
  const [slug] = useState(props.pageContext.slug)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => e.preventDefault() && setSubmitted(true)

  if (submitted) {
    return (
      <>
        <h2>Add a comment</h2>
        <p>Thanks for leaving a comment! It will show up here once it's been approved.</p>
      </>
    )
  }

  return (
    <>
      <h2>Add a comment</h2>
      <form
        method="POST"
        action="https://dev.staticman.net/v3/entry/github/kellenmace/kellenmace.com/master/comments"
        onSubmit={handleSubmit}
      >
        <input
          name="options[slug]"
          type="hidden"
          value={slug}
        />
        <input 
          name="fields[name]"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          name="fields[email]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          name="fields[message]"
          placeholder="Comment"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    </>
  )
}

export default CommentForm
