import { button } from 'leva'
import React from 'react'

function Button({isBeam=false , containerClass,name}) {
  return (
    <button className={`btn ${containerClass}`}>
        {isBeam && <span className='relative flex w-3 h-3 '>
                <span className='btn-ping'/>
                <span className='btn-ping_dot'/>
            </span>}
            {name}
    </button>
  )
}

export default Button
