import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import SearchInterface from '../components/Album/SearchInterface'
import SongCard from '../components/Album/SongCard'

import Navbar from '../components/common/Navbar'

const Album = (props) => {

    let { chart_id } = useParams()
    let chartDetails = {}

    const [loading, setLoading] = useState(true)
    const [album, setAlbum] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get(`/api/albums/${chart_id}`)
            setLoading(false)
            if(res.data.songs)
                setAlbum(res.data.songs)
        } catch (err) {
            const errors = err.response.data.errors

            if (errors) {
                console.log(errors)
            }
        }
    }, [])

    if (props.charts.length == 0) {
        return <Redirect to='/charts' />
    }

    let found = false
    props.charts.forEach(chart => {
        if (chart._id == chart_id) {
            found = true
            chartDetails = chart
        }
    })
    if (!found) {
        return <Redirect to='/charts' />
    }

    return (
        <div className='h-screen'>
            <Navbar />

            <div className='h-full pt-14 mx-4 md:mx-16'>
                <div className='py-2 md:py-8 h-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
                    <div className='md:col-span-2 flex flex-col overflow-y-hidden'>
                        <div className={`m-1 md:m-2 rounded-lg bg-${chartDetails.name.split(' ')[0].toLowerCase()} p-2 md:p-4 text-center flex flex-col justify-center`}>
                            <h1 className='font-semibold text-sm md:text-xl'>{chartDetails.name}</h1>
                            <h4 className='text-xs md:text-lg'>{chartDetails.nextDate}</h4>
                        </div>
                        <SearchInterface />
                    </div>
                    <div className='flex flex-col overflow-y-hidden'>
                        <div className='m-2 rounded-lg bg-primary p-2 md:p-4 text-center flex flex-col justify-center'>
                            <h1 className='font-semibold text-sm md:text-xl'>Credits: 110</h1>
                        </div>
                        <h1 className='text-center text-xs md:text-lg font-semibold my-1'>My Album</h1>
                        <div className='p-2 h-full flex flex-col overflow-y-scroll'>
                            {album.length > 0 && loading ? <p>loading...</p> : album.map(song => <SongCard
                                key={song.imageURL}
                                songName={song.title}
                                artist={song.artist}
                                imageURL={song.imageURL}
                                credits={song.credits}
                                selected={true} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        charts: state.charts.charts
    }
}

export default connect(mapStateToProps)(Album)
