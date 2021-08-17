import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'

const SongCard = ({ songName, artist, imageURL, credits, selected, handler }) => {
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
                <div className='mr-4 text-xs md:text-lg font-semibold text-text'>{credits}</div>
                <span onClick={handler}>
                    {selected
                        ? <MdRemoveCircleOutline className='cursor-pointer text-primary h-full text-sm md:text-xl' />
                        : <MdAddCircleOutline className='cursor-pointer text-primary h-full text-sm md:text-xl' />}
                </span>
            </div>
        </div>
    )
}

export default SongCard
