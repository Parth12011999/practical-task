import React from 'react'

function Banner() {
  return (
    <div className='p-6 flex flex-col justify-center text-center bg-slate-200 items-center rounded-md sm:min-w-full '>
        <span className='tracking-widest'>WELCOME TO BULETIN</span>
        <h1 className='text-3xl font-bold'>Craft Narratives that ignite <span className='text-red-600'>Inspiration</span>,
        <br /> <span className='text-red-600'>Knowledge</span>, and <span className='text-red-600'>Entertainment</span></h1>
    </div>
  )
}

export default Banner