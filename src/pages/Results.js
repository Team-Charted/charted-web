import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getResults } from '../actions/results'

import Navbar from '../components/common/Navbar'
import ResultCard from '../components/Results/ResultCard'

const Results = (props) => {

    useEffect(() => {
        props.getResults()
    }, [])

    return (
        <div className='min-h-screen'>
            <Navbar />

            <div className='pt-14 mx-16'>
                <h1 className='my-10 text-3xl text-center font-semibold'>Results</h1>
                {!props.results.loading &&
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28'>
                        {props.results.results.map(result => <ResultCard
                            key={result._id}
                            resultId={result._id}
                            chartName={result.chart.name}
                            prizePool={result.chart.prizePool}
                            cost={result.chart.cost}
                            date={result.date} />)}
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
        results: state.results
    }
}

const mapDispatchToProps = {
    getResults: getResults
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
