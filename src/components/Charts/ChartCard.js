import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { IoTrophy, IoPricetag } from 'react-icons/io5'

const ChartCard = ({ chartName, timer, bgColor, prizePool, cost, nextDate }) => {
    return (
        <div className='mx-auto w-full h-52'>
            <div className={`h-3/4 p-4 flex flex-col justify-around rounded-t-lg bg-${bgColor}`}>
                <h1 className='font-semibold text-lg text-center'>{chartName}</h1>
                <h3 className='font-semibold text-lg text-center'>{timer}</h3>
                <div className='w-full flex justify-between'>
                    <span className=''><IoTrophy className='inline' /> {prizePool}</span>
                    <span className=''><IoPricetag className='inline' /> {cost}</span>
                </div>
            </div>
            <div className='h-1/4 p-4 rounded-b-lg flex justify-between items-center bg-surface'>
                <span>{nextDate}</span>
                <button><MdAddCircleOutline /></button>
            </div>
        </div>
    )
}

export default ChartCard
