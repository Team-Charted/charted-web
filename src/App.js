import { Route, Switch } from 'react-router-dom'

import Auth from './pages/Auth'
import Charts from './pages/Charts'
import Home from './pages/Home'

const App = () => {
	return (
		<div className='App bg-background text-white'>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/auth' exact component={Auth} />
				<Route path='/charts' exact component={Charts} />
			</Switch>
		</div>
	)
}

export default App
