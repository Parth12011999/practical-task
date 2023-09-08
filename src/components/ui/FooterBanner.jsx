import React from 'react'
import Inputs from './Inputs'
import Button from './Button'

function FooterBanner() {
    return (
        <div className='p-12 lg:flex lg:flex-row lg:justify-between lg:text-center sm:flex sm:flex-col sm:gap-y-4 bg-gray-200 items-center rounded-md'>
            <div>
            <span className='tracking-widest'>GET FIRST UPDATE</span>
            <h1 className='text-3xl font-bold'>Get the news in front line by
                <br /> <span className='text-red-500'>Subscribe</span>Our latest updates</h1>
            </div>
            <div className='flex gap-x-3'>
                <Inputs/>
                <Button>Subscribe</Button>
            </div>
        </div>
    )
}

export default FooterBanner