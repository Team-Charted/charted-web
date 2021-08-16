import { Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'

import Auth from './pages/Auth'
import Charts from './pages/Charts'
import Album from './pages/Album'
import Home from './pages/Home'
import Account from './pages/Account'
import setAuthToken from './util/setAuthToken'
import store from './store'
import { loadUser } from './actions/auth'
import AuthRoute from './util/AuthRoute'

if(localStorage.token) {
	setAuthToken(localStorage.token)
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	return (
		<div className='App bg-background text-white'>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/auth' exact component={Auth} />
				<AuthRoute path='/charts' exact component={Charts} />
				<AuthRoute path='/album' component={Album} />
				<AuthRoute path='/account' exact component={Account} />
			</Switch>
		</div>
	)
}

export default App
