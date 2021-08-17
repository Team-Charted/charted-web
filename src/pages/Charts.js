import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharts } from '../actions/charts'

import ChartCard from '../components/Charts/ChartCard'
import Navbar from '../components/common/Navbar'

const Charts = (props) => {

    useEffect(() => {
        props.getCharts()
    }, [])

    return (
        <div className='min-h-screen'>
            <Navbar />

            <div className='pt-14 mx-16'>
                <h1 className='my-10 text-3xl text-center font-semibold'>Trending Charts</h1>
                {!props.charts.loading &&
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28'>
                        {props.charts.charts.map(chart => <ChartCard
                            key={chart._id}
                            chartId={chart._id}
                            chartName={chart.name}
                            prizePool={chart.prizePool}
                            cost={chart.cost}
                            nextDate={chart.nextDate} />)}
                    </div>
                }
                <p className='mt-24 text-lg text-center'>More charts coming soon!</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        charts: state.charts
    }
}

const mapDispatchToProps = {
    getCharts: getCharts
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts)
