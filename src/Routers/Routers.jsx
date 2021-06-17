import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// Routers 
import Home from './../pages/Home'

const Routers = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route component={() => <h1>Aqui não tem ninguém!</h1>}></Route>
		</Switch>
	</BrowserRouter>
)
export default Routers