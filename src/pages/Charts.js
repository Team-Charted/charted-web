import React from 'react'

import ChartCard from '../components/Charts/ChartCard'
import Navbar from '../components/common/Navbar'

const Charts = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />

            <div className='pt-14 mx-16'>
                <h1 className='my-10 text-3xl text-center font-semibold'>Trending Charts</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28'>
                    <ChartCard
                        chartName='Billboard Hot 100'
                        timer='10:10:10'
                        bgColor='billboardBlue'
                        prizePool='10000'
                        entryFee='25'
                        dateText='Week of 17 July 2021' />
                    <ChartCard
                        chartName='Spotify Top 200: Global'
                        timer='10:10:10'
                        bgColor='spotifyGreen'
                        prizePool='10000'
                        entryFee='25'
                        dateText='Week of 17 July 2021' />
                    <ChartCard
                        chartName='Apple Music Top 100'
                        timer='10:10:10'
                        bgColor='appleMusicRed'
                        prizePool='10000'
                        entryFee='25'
                        dateText='Week of 17 July 2021' />
                </div>
                <p className='mt-24 text-lg text-center'>More charts coming soon!</p>
            </div>
        </div>
    )
}

export default Charts
