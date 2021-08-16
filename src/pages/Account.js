import React from 'react'
import { MdAccountCircle, MdEmail } from 'react-icons/md'
import { HiOutlineAtSymbol } from 'react-icons/hi'
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi'
import { RiHistoryFill } from 'react-icons/ri'

import Navbar from '../components/common/Navbar'

const Account = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='h-full py-20 mx-4 md:mx-16'>
                <div className='py-4 md:py-8 h-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36'>
                    <div className='h-full grid grid-rows-2 gap-4 md:gap-12'>
                        <div className='flex flex-col justify-around bg-surface md:w-4/5 md:mx-auto p-6 rounded-lg'>
                            <h3 className='text-3xs md:text-base font-semibold text-text'><MdAccountCircle className='inline text-2xl mr-1' /> Mizan Ali</h3>
                            <h3 className='text-3xs md:text-base font-semibold text-text'><HiOutlineAtSymbol className='inline text-2xl mr-1' /> mizanxali</h3>
                            <h3 className='text-3xs md:text-base font-semibold text-text'><MdEmail className='inline text-2xl mr-1' /> mizanalip786@gmail.com</h3>
                            <div className='text-center'>
                                <button className='p-2 mx-auto w-1/2 bg-text text-3xs md:base text-white rounded-lg'>Sign Out</button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-around items-center bg-primary md:w-4/5 md:mx-auto p-6 rounded-lg'>
                            <h3 className='text-white text-xs md:text-2xl'>My Wallet</h3>
                            <h1 className='text-2xl md:text-4xl font-medium'>$10000.00</h1>
                            <div className='w-full flex justify-around'>
                                <div className='cursor-pointer flex flex-col items-center'><FiArrowDownLeft className='font-bold text-lg md:text-3xl' /><h6 className='text-3xs md:text-base'>Add</h6></div>
                                <div className='cursor-pointer flex flex-col items-center'><FiArrowUpRight className='font-bold text-lg md:text-3xl' /><h6 className='text-3xs md:text-base'>Withdraw</h6></div>
                                <div className='cursor-pointer flex flex-col items-center'><RiHistoryFill className='font-bold text-lg md:text-3xl' /><h6 className='text-3xs md:text-base'>History</h6></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full hidden md:flex items-center'>
                        <div className='h-full mx-auto border-l-2 border-primary flex flex-col justify-center'>
                            <img className='w-1/2 mx-auto' src='https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg' alt='Auth page illustration' />
                            <h1 className='text-xl font-semibold w-3/5 text-center mx-auto my-5'>Changing the way the world looks at music charts, one song at a time.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
