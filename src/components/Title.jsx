import React from 'react'

function Title({title,subTitle}) {
  return (
    <div>
        <h1 className='text-4xl md:text-[40px]'>{title}</h1>
        <p className='flex justify-center'>{subTitle}</p>
    </div>
  )
}

export default Title