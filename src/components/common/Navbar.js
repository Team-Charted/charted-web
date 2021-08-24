import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../../actions/auth'

const Navbar = (props) => {

    const authLinks = (
        <div>
            <Link to='/charts'>
                <span className='mx-3 font-semibold hover:text-surface'>Charts</span>
            </Link>
            <Link to='/results'>
                <span className='mx-3 font-semibold hover:text-surface'>Results</span>
            </Link>
            <Link to='/account'>
                <span className='mx-3 font-semibold hover:text-surface'>Account</span>
            </Link>
            <Link to='/'>
                <span onClick={props.logoutUser} className='ml-3 font-semibold hover:text-surface'>Sign Out</span>
            </Link>
        </div>
    )

    const guestLinks = (
        <div>
            <Link to='/auth'>
                <span className='mx-3 font-semibold hover:text-surface'>Auth</span>
            </Link>
        </div>
    )

    return (
        <div className='z-50 px-4 md:px-16 h-14 w-full bg-primary text-white text-lg font-semibold flex justify-between items-center fixed'>
            <div>
                <Link to='/'>
                    <span className='font-bold text-2xl'>charted</span>
                </Link>
            </div>
            <div className='hidden md:block'>
                {!props.auth.loading && (<>{props.auth.isAuthenticated ? authLinks : guestLinks}</>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
