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
import Results from './pages/Results'
import Result from './pages/Result'

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
				<AuthRoute path='/results' exact component={Results} />
				<AuthRoute path='/results/:result_id' exact component={Result} />
				<AuthRoute path='/charts/:chart_id' exact component={Album} />
				<AuthRoute path='/account' exact component={Account} />
			</Switch>
		</div>
	)
}

export default App
