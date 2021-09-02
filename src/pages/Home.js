import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

const Home = (props) => {
    if(props.user) return <Redirect to='charts' />
    else return <Redirect to='auth' />
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Home)
