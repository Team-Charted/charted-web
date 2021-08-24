import React from 'react'

const SongCard = ({ songName, artist, imageURL, points }) => {
    return (
        <div className='pr-4 my-1 mx-auto w-full flex justify-between h-12 md:h-14 bg-surface'>
            <div className='flex'>
                <img className='h-full mr-4' src={imageURL} alt='Song thumbnail' />
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-2xs md:text-sm'>{songName}</h1>
                    <h4 className='text-3xs md:text-xs text-text'>{artist}</h4>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='mr-4 text-xs md:text-lg font-semibold text-text'>{points}</div>
            </div>
        </div>
    )
}

export default SongCard
