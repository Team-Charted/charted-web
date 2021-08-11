import { Route, Switch } from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/auth' exact component={Auth} />
			</Switch>
		</div>
	)
}

export default App
