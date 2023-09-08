import { BellDot, ImageIcon } from 'lucide-react'
import React, { Profiler } from 'react'
import { Link } from 'react-router-dom'
import AccountMenu from './ui/Accountmenu'
import BasicMenu from './ui/Basicmenu'

function Header() {

    const NavData = [
        {
            title: 'Stories',
            href: '/stories'
        },
        {
            title: 'Creator',
            href: '/creator'
        },
        {
            title: 'Community',
            href: '/community'
        },
        {
            title: 'Subscribe',
            href: '/subscribe'
        }
    ]

    return (
        <header className='flex justify-between items-center p-6'>

            <nav className='flex justify-center '>
                <div className='mx-4'>
                    <Link to="/" className='text-red-500 font-extrabold text-2xl'>Buletin</Link>
                </div>
                <div className='text-2xl'>
                    |
                </div>
                <div className='sm:block md:hidden'>
                    <BasicMenu props={NavData}/>
                </div>
                <ul className='md:flex md:list-unstyled md:items-center sm:hidden'>
                    {
                        NavData?.map((nav) => {
                            return (
                                <li className='px-5'>
                                    <Link className='text-decoration-none font-semibold' to={nav.href}>{nav.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <nav>
                <ul className='md:flex md:justify-center md:items-center sm:hidden '>
                    <li className='px-5'>
                        <a href="">Write</a>
                    </li>
                    <li className='px-5'>
                        <BellDot color='black' />
                    </li>
                    <li className='px-5'>
                        <ImageIcon color='black' className='rounded' />
                    </li>
                </ul>
                <div className='sm:block md:hidden'>
                    <AccountMenu />

                </div>
            </nav>
        </header>
    )
}

export default Header