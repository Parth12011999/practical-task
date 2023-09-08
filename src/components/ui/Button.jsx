import React from 'react'

export 

function Button({children}) {

  const Variants = {
    default: {
      padding:'10px 20px',
      backgroundColor:'red',
      borderRadius:'5px'
    }
  }
  return (
    <button style={Variants.default}>
      {children}
    </button>
  )
}

export default Button