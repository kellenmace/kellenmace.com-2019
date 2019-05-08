import React, { useState } from "react"

const CommentForm = props => {
  const [slug] = useState(props.pageContext.slug)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const sendCommentToStaticman = () => {
    const url = `https://dev.staticman.net/v3/entry/github/kellenmace/kellenmace.com/master/comments`
    const queryString =`options[slug]=${slug}&fields[name]=${name}&fields[email]=${email}&fields[message]=${message}`

    fetch(url, {
      method: 'post',
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: queryString
    })
      .then(response => response.json())
      .then(data => console.log(`Staticman request succeeded 🙌🏼😄`, data))
      .catch(data => console.log(`Staticman request crashed and burned 🔥😬`, data))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    sendCommentToStaticman()
  }

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
      <form onSubmit={handleSubmit}>
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
