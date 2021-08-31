import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'

const LeaderboardCard = ({ index, username, albumName, points }) => {
    return (
        <div className='px-2 my-1 mx-auto w-full flex justify-between h-12 md:h-14 bg-surface'>
            <div className='flex'>
                <h1 className='my-auto mx-4 text-xs md:text-lg font-semibold text-text'>{index}</h1>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-2xs md:text-sm'>{username}</h1>
                    {/* <h4 className='text-3xs md:text-xs text-text'>{albumName}</h4> */}
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='mr-4 text-xs md:text-lg font-semibold text-text'>{points}</div>
            </div>
        </div>
    )
}

export default LeaderboardCard
