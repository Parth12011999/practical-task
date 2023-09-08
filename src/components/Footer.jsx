import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'
import FooterBanner from './ui/FooterBanner'

function Footer() {

    const FooterData = [
        {
            title: 'Buisness',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'Technology',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'Travel',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'Sports',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'Entertainment',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'Features',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'Weather',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
        {
            title: 'More',
            list: ['startup', 'Employee', 'Success', 'Videos', 'Markets']
        },
    ]

    return (
        <>
            <FooterBanner />
            <div className='lg:flex lg:flex-row justify-center items-start w-full mt-10 sm:flex sm:flex-col sm:items-center'>
                <div className='lg:h-96 sm:h-auto md:w-2/3 sm:w-2/3 lg:w-1/2 pe-20 flex flex-col justify-between lg:text-left sm:text-center sm:my-10 sm:w-full'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5'>Buletin</h1>
                        <p className='my-5 sm:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, earum ducimus delectus harum recusandae facilis ex eum inventore mollitia, corporis iste modi.</p>
                        <div className='flex my-5 sm:justify-center lg:justify-start'>
                            <div className='mx-2 p-2 rounded-full bg-red-500 text-white'>
                                <FacebookIcon fill='white' className='hover:scale-105 transition-all duration-200 ease-in-out' />
                            </div>
                            <div className='mx-2 p-2 rounded-full bg-red-500 text-white'>
                                <TwitterIcon fill='white' className='hover:scale-105 transition-all duration-200 ease-in-out' />
                            </div>
                            <div className='mx-2 p-2 rounded-full bg-red-500 text-white'>
                                <InstagramIcon className='hover:scale-105 bg-transparent transition-all duration-200 ease-in-out' />
                            </div>
                            <div className='mx-2 p-2 rounded-full bg-red-500 text-white'>
                                <LinkedinIcon fill='white' className='hover:scale-105 transition-all duration-200 ease-in-out' />
                            </div>
                        </div>
                    </div>
                    <div className='sm:hidden lg:block'>
                        <a className='text-slate-500 text-decoration-none '>Copyrights </a>
                    </div>
                </div>
                <div className='gap-x-30 gap-y-20 lg:w-full md:w-2/3 sm:w-1/3  flex lg:justify-start md:justify-center sm:justify-center lg:text-left sm:text-center items-center flex-wrap'>
                    {
                        FooterData?.map((li) => {
                            return (
                                <ul className='px-6 sm:w-full md:w-56 lg:w-52'>
                                    <span className='text-2xl font-bold'>{li.title}</span>
                                    {
                                        li.list.map((item) => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Footer