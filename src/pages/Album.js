import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import SearchInterface from '../components/Album/SearchInterface'
import SongCard from '../components/Album/SongCard'

import Navbar from '../components/common/Navbar'

const Album = (props) => {

    const history = useHistory()

    let { chart_id } = useParams()
    let chartDetails = {}

    const [loading, setLoading] = useState(true)
    const [album, setAlbum] = useState([])
    const [credits, setCredits] = useState(75)

    useEffect(async () => {
        try {
            const res = await axios.get(`/api/albums/${chart_id}`)
            setLoading(false)
            if (res.data.songs) {
                setAlbum(res.data.songs.map(song => ({
                    title: song.title,
                    artist: song.artist,
                    leadSingle: song.leadSingle,
                    credits: song.credits,
                    imageURL: song.imageURL
                })))
                let sum = 0
                res.data.songs.forEach(song => sum += song.credits)
                setCredits(credits - sum)
            }
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

    const removeSongFromAlbum = (removeIndex) => {
        setCredits(credits + album[removeIndex].credits)
        setAlbum([...album.slice(0, removeIndex), ...album.slice(removeIndex + 1)])
    }

    const addSongToAlbum = (songToAdd) => {

        let songAlreadyAdded = false
        album.forEach(song => {
            if (song.title === songToAdd.title && song.artist === songToAdd.artist) {
                songAlreadyAdded = true
            }
        })
        if (songAlreadyAdded) {
            alert('Song already added!')
        }
        else if (album.length == 9) {
            alert('Cannot add more than 9 songs.')
        }
        else if (credits < songToAdd.credits) {
            alert('Not enough credits.')
        }
        else {
            setAlbum([{...songToAdd, leadSingle: false}, ...album])
            console.log(album);
            setCredits(credits - songToAdd.credits)
        }
    }

    const saveAlbum = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({songs: album})
        try {
            const res = await axios.post(`/api/albums/${chart_id}`, body, config)
            history.push('/charts')
        } catch(err) {
            const errors = err.response.data.errors
    
            if (errors) {
                console.log(errors)
            }
        }
    }

    return (
        <div className='h-screen'>
            <Navbar />

            <div className='h-full pt-14 mx-4 md:mx-16'>
                <div className='py-2 md:py-8 h-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
                    <div className='md:col-span-2 flex flex-col overflow-y-hidden'>
                        <div className={`m-1 md:m-2 rounded-lg bg-${chartDetails.name.split(' ')[0].toLowerCase()} p-2 md:p-4 text-center flex flex-col justify-center`}>
                            <h1 className='font-semibold text-sm md:text-xl'>{chartDetails.name}</h1>
                            <h4 className='text-xs md:text-lg'>{chartDetails.date}</h4>
                        </div>
                        <SearchInterface handler={addSongToAlbum} />
                    </div>
                    <div className='flex flex-col overflow-y-hidden'>
                        <div className='flex m-2'>
                            <div className='w-3/4  rounded-lg bg-primary p-2 md:p-4 text-center flex flex-col justify-center'>
                                <h1 className='font-semibold text-sm md:text-xl'>Credits: {credits}</h1>
                            </div>
                            <button onClick={saveAlbum} className='ml-2 w-1/4 rounded-lg bg-primary p-2 md:p-4 text-center font-semibold text-sm md:text-xl'>SAVE</button>
                        </div>
                        <h1 className='text-center text-xs md:text-lg font-semibold my-1'>My Album</h1>
                        <div className='p-2 h-full flex flex-col overflow-y-scroll'>
                            {album.length > 0 && loading ? <p>loading...</p> : album.map((song, i) => <SongCard
                                key={i}
                                songName={song.title}
                                artist={song.artist}
                                imageURL={song.imageURL}
                                credits={song.credits}
                                handler={() => removeSongFromAlbum(i)}
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
