import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'

import Navbar from '../components/common/Navbar'
import Leaderboard from '../components/Result/Leaderboard'
import SongCard from '../components/Result/SongCard'

const Result = (props) => {

    const history = useHistory()

    let { result_id } = useParams()
    let resultDetails = {}

    const [loading, setLoading] = useState(true)
    const [album, setAlbum] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get(`/api/results/${result_id}/album`)
            setLoading(false)
            setAlbum(res.data);
            console.log(res.data);
        } catch (err) {
            const errors = err.response.data.errors

            if (errors) {
                console.log(errors)
            }
        }
    }, [])

    if (props.results.length == 0) {
        return <Redirect to='/results' />
    }

    let found = false
    props.results.forEach(result => {
        if (result._id == result_id) {
            found = true
            resultDetails = result
        }
    })
    if (!found) {
        return <Redirect to='/results' />
    }

    return (
        <div className='h-screen'>
            <Navbar />

            <div className='h-full pt-14 mx-4 md:mx-16'>
                <div className='py-2 md:py-8 h-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
                    <div className='md:col-span-2 flex flex-col overflow-y-hidden'>
                        <div className={`m-1 md:m-2 rounded-xl bg-${resultDetails.chart.name.split(' ')[0].toLowerCase()} p-2 md:p-4 text-center flex flex-col justify-center`}>
                            <h1 className='font-semibold text-sm md:text-xl'>{resultDetails.chart.name}</h1>
                            <h4 className='text-xs md:text-lg'>{resultDetails.date}</h4>
                        </div>
                        <Leaderboard resultId={result_id} />
                    </div>
                    <div className='flex flex-col overflow-y-hidden'>
                        <h1 className='text-center text-xs md:text-lg font-semibold my-1'>My Album</h1>
                        <div className='p-2 h-full flex flex-col overflow-y-scroll'>
                            {album.length > 0 && loading ? <p>loading...</p> : album.map((song, i) => <SongCard
                                key={i}
                                songName={song.title}
                                artist={song.artist}
                                imageURL={song.imageURL}
                                points={song.points} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results.results
    }
}

export default connect(mapStateToProps)(Result)
