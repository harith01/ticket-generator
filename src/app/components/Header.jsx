import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'


const Header = () => {
  return (
    <header className='flex justify-between items-center max-w-[1200px] mx-auto bg-gray-[#05252C66] border border-[#197686] rounded-[24px] py-3 px-4'>
        <Image
            src={logo}
            width={93}
            height={36}
            alt='logo'
            unoptimized
        />
        <ul className='sm:flex space-x-4 hidden'>
            <li className='hover:opacity-90'>Events</li>
            <li className='hover:opacity-90'>My Tickets</li>
            <li className='hover:opacity-90'>About Projects</li>
        </ul>
        <button className='bg-white flex items-center gap-2 px-4 py-3 rounded-[12px] text-[#0A0C11] text-[16px]'>
            <div className=''>My Tickets</div>
            <Image
            src={arrow}
            width={18}
            height={8}
            alt='logo'
            unoptimized
        />
        </button>
    </header>
  )
}

export default Header