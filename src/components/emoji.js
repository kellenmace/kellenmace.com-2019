import React from "react"

const Emoji = props => {
  const { symbol, label } = props;

  return (
    <span
      className="emoji"
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}

export default Emoji
