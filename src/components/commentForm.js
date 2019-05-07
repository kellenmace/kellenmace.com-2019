import React from "react"

const CommentForm = props => (
    <>
        <h2>Add a comment</h2>
        <form
            method="POST"
            action="https://dev.staticman.net/v3/entry/github/kellenmace/kellenmace.com/master/comments"
        >
            <input
                name="options[slug]"
                type="hidden"
                value={props.pathContext.slug}
            />
            <input name="fields[name]" type="text" placeholder="Name" required />
            <input
                name="fields[email]"
                type="email"
                placeholder="Email"
                required
            />
            <textarea name="fields[message]" placeholder="Comment" required />
            <button type="submit">Submit Comment</button>
        </form>
    </>
)

export default CommentForm
