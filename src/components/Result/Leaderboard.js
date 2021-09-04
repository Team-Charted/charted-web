import React, { useEffect, useState } from 'react'
import axios from '../../util/axios'

import LeaderboardCard from './LeaderboardCard'

const Leaderboard = ({ resultId }) => {

    const [loading, setLoading] = useState(true)
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(async () => {
        try {
            const res = await axios.get(`/api/results/${resultId}`)
            setLoading(false)
            setLeaderboard(res.data.leaderboard);
            console.log(res.data);
        } catch (err) {
            const errors = err.response.data.errors

            if (errors) {
                console.log(errors)
            }
        }
    }, [])

    return (
        <div className='h-full px-2 flex flex-col overflow-y-hidden'>
            {leaderboard.length > 0 && loading ? <p>loading...</p> : leaderboard.map((entry, i) => <LeaderboardCard
                key={i}
                index={i + 1}
                username={entry.username}
                albumName={entry.albumName}
                points={entry.points} />)}
        </div>
    )
}

export default Leaderboard
