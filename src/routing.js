import React,{useEffect} from 'react'
import App from './App';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useCustom} from './context';
import {Login} from './login';
import {Home} from './home'
import {Error} from './error'

export const Routing = () => {
	const {value} = useCustom()


	return (
		<>
		<Router>
			<Routes>
				<Route path="/login" element={<Login/>}/>
				<Route exact path="/" element={<App/>}/>
				{value && <Route path="/home" element={<Home/>}/>}
			</Routes>
		</Router>
		</>
		)
}

// in react-router-dom v5 we had switch to navigate to error page but in v6 we dont have so i couldnt implement 
//black page to error 