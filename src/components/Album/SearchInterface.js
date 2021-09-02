import axios from 'axios'
import React, { useRef, useState } from 'react'

import SongCard from './SongCard'

const SearchInterface = ({ handler }) => {
    const searchQueryRef = useRef(null)

    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const searchSongs = async (e) => {
        setLoading(true)
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({
            queryString: searchQueryRef.current.value
        })
        try {
            const res = await axios.post('/api/searches', body, config)
            setLoading(false)
            setSearchResults(res.data)
        } catch(err) {
            const errors = err.response.data.errors
    
            if (errors) {
                console.log(errors)
            }
        }
    }

    const addSongToAlbum = (index) => {
        handler(searchResults[index])
    }

    return (
        <div className='h-full px-2 flex flex-col overflow-y-hidden'>
            <form onSubmit={searchSongs}>
                <input ref={searchQueryRef} id='name' className='my-2 mx-auto w-full block bg-transparent border-2 border-text rounded-xl outline-none px-3 py-2 text-3xs md:text-2xs' type='text' placeholder='Search for a song...'></input>
            </form>
            <div className='h-full flex flex-col overflow-y-scroll'>
                {loading ? <p>loading...</p> : searchResults.map((song, i) => <SongCard
                    key={i}
                    songName={song.title}
                    artist={song.artist}
                    imageURL={song.imageURL}
                    credits={song.credits}
                    handler={() => addSongToAlbum(i)}
                    selected={false} />)}
            </div>
        </div>
    )
}

export default SearchInterface
