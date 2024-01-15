import React from 'react'

const strokeSVG = ({condition}) => {
  return (
    <>
    {condition ?(
        <svg xmlns="http://www.w3.org/2000/svg" width="93" height="2" viewBox="0 0 93 2" fill="none">
        <path d="M0.785156 1.19495H91.972" stroke="#004343" stroke-width="1.50722" stroke-linecap="round"/>
      </svg>
    ):(
        <svg xmlns="http://www.w3.org/2000/svg" width="93" height="2" viewBox="0 0 93 2" fill="none">
  <path d="M1.02734 1.19495H92.2142" stroke="#B3B3B3" stroke-width="1.50722" stroke-linecap="round"/>
</svg>
    )}
   </>
  )
}

export default strokeSVG