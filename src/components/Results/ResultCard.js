import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdEdit } from 'react-icons/md'
import { IoTrophy, IoPricetag, IoPodium } from 'react-icons/io5'
import axios from 'axios'
import { Link, Redirect, withRouter } from 'react-router-dom'

const ResultCard = ({ resultId, chartName, prizePool, cost, date }) => {

    return (    
        <div className='mx-auto w-full h-52'>
            <div className={`h-3/4 p-4 flex flex-col justify-around rounded-t-lg bg-${chartName.split(' ')[0].toLowerCase()}`}>
                <h1 className='font-bold text-lg text-center'>{chartName}</h1>
                <div className='w-full flex justify-between'>
                    <span className=''><IoTrophy className='inline' /> {prizePool}</span>
                    <span className=''><IoPricetag className='inline' /> {cost}</span>
                </div>
            </div>
            <div className='h-1/4 p-4 rounded-b-lg flex justify-between items-center bg-surface'>
                <span>{date}</span>
                <Link to={`/results/${resultId}`}><IoPodium /></Link>
            </div>
        </div>
    )
}

export default withRouter(ResultCard)
