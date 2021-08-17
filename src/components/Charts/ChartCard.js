import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline, MdEdit } from 'react-icons/md'
import { IoTrophy, IoPricetag } from 'react-icons/io5'
import axios from 'axios'
import { Link, Redirect, withRouter } from 'react-router-dom'

const ChartCard = ({ chartId, chartName, prizePool, cost, nextDate, router }) => {

    const [loading, setLoading] = useState(true)
    const [album, setAlbum] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get(`/api/albums/${chartId}`)
            setLoading(false)
            setAlbum(res.data)
        } catch (err) {
            const errors = err.response.data.errors

            if (errors) {
                console.log(errors)
            }
        }
    }, [])

    return (    
        <div className='mx-auto w-full h-52'>
            <div className={`h-3/4 p-4 flex flex-col justify-around rounded-t-lg bg-${chartName.split(' ')[0].toLowerCase()}`}>
                <h1 className='font-semibold text-lg text-center'>{chartName}</h1>
                <h3 className='font-semibold text-lg text-center'>13:10:05</h3>
                <div className='w-full flex justify-between'>
                    <span className=''><IoTrophy className='inline' /> {prizePool}</span>
                    <span className=''><IoPricetag className='inline' /> {cost}</span>
                </div>
            </div>
            <div className='h-1/4 p-4 rounded-b-lg flex justify-between items-center bg-surface'>
                <span>{nextDate}</span>
                {!loading && <Link to={`/charts/${chartId}`}>{album.length == 0 ? <MdAddCircleOutline /> : <MdEdit />}</Link>}
            </div>
        </div>
    )
}

export default withRouter(ChartCard)
