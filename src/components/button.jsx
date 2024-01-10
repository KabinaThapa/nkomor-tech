import React from 'react'

const button = ({onClick, className, children}) => {
  return (
    <button onClick={onClick} className={className}>
        {children}

    </button>
  )
}

export default button