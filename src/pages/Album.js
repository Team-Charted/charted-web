import React from 'react'
import SongCard from '../components/Album/SongCard'

import Navbar from '../components/common/Navbar'

const Album = () => {
    return (
        <div className='h-screen'>
            <Navbar />

            <div className='h-full pt-14 mx-16'>
                <div className='py-4 md:py-8 h-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2 flex flex-col overflow-y-hidden'>
                        <div className='m-2 rounded-lg bg-appleMusicRed p-4 text-center flex flex-col justify-center'>
                            <h1 className='font-semibold text-xl'>Apple Music</h1>
                            <h4 className='text-lg'>Day of 17 Jan 2021</h4>
                        </div>
                        <div className='h-full px-2 flex flex-col'>
                            <input id='name' className='my-2 mx-auto w-full block bg-transparent border-2 border-text rounded-lg outline-none px-3 py-2 text-2xs' type='text' placeholder='John Doe'></input>
                            <div className='h-full flex flex-col overflow-y-scroll'>
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                            </div>
                        </div>
                    </div>
                    <div className='overflow-y-hidden'>
                        <div className='m-2 rounded-lg bg-primary p-4 text-center flex flex-col justify-center'>
                            <h1 className='font-semibold text-xl'>Credits: 110</h1>
                        </div>
                        <h1 className='text-center text-lg font-semibold my-1'>My Album</h1>
                        <div className='p-2 h-full flex flex-col overflow-y-scroll'>
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                    <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                                <SongCard
                                    songName='Gods Plan'
                                    artist='Drake'
                                    imageURL='https://images.genius.com/8205d3bffef4559d465e64cc862876a5.1000x1000x1.jpg'
                                    credits='8.5'
                                    selected={false} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album
