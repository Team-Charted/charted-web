import React from 'react'
import { RiMedalFill } from 'react-icons/ri'
import { IoTrophy, IoPricetag, IoPodium } from 'react-icons/io5'
import { Link, Redirect, withRouter } from 'react-router-dom'

const ResultCard = ({ resultId, chartName, prizePool, cost, date }) => {

    return (
        <div className='mx-auto w-full h-52'>
            <div className={`h-3/4 p-4 flex flex-col justify-around rounded-t-xl bg-${chartName.split(' ')[0].toLowerCase()}`}>
                <h1 className='font-bold text-lg text-center'>{chartName}</h1>
                <span className='text-center'><IoTrophy className='inline' /> {prizePool}</span>
                <span className='text-center'><RiMedalFill className='inline' /> {cost}</span>
            </div>
            <div className='h-1/4 p-4 rounded-b-lg flex justify-between items-center bg-surface'>
                <span>{date}</span>
                <Link to={`/results/${resultId}`}><IoPodium /></Link>
            </div>
        </div>
    )
}

export default withRouter(ResultCard)
