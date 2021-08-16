import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, auth, ...rest }) => (
        <Route {...rest} render={routeProps => !auth.isAuthenticated && !auth.loading ? <Redirect to='/auth' /> : <Component {...routeProps} />} />
)

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AuthRoute)