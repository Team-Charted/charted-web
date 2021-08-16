import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'

const SongCard = ({ songName, artist, imageURL, credits, selected }) => {
    return (
        <div className='pr-4 my-1 mx-auto w-full flex justify-between h-14 bg-surface'>
            <div className='flex'>
                <img className='h-full mr-4' src={imageURL} alt='Song thumbnail' />
                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-sm'>{songName}</h1>
                    <h4 className='text-xs text-text'>{artist}</h4>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='mr-4 text-lg font-semibold text-text'>{credits}</div>
                {selected
                    ? <MdRemoveCircleOutline className='cursor-pointer text-primary h-full text-xl' />
                    : <MdAddCircleOutline className='cursor-pointer text-primary h-full text-xl' />}
            </div>
        </div>
    )
}

export default SongCard
