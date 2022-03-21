import React from 'react';
import {useCustom} from './context';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const App = ()=> {
	const {handlesubmit,handlechange,obj,value} = useCustom();

	let navigate = useNavigate()
	const navigation = () => {
		if(value){
			navigate("/home")
		}else{
			navigate("/")
		}
	}

	return (
		<>
			<div>
				<Link to="/login">Login</Link>
				<button onClick={navigation}>Home</button>
			</div>
			<form>
				<label htmlFor="firstname">Firstname</label>
				<input type="text" name="firstname" onChange={handlechange} value={obj.firstname}/>
				<label htmlFor="lastname">Lastname</label>
				<input type="text" name="lastname" onChange={handlechange} value={obj.lastname}/>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" onChange={handlechange} value={obj.email}/>
				<label htmlFor="password"></label>
				<input type="password" name="passowrd" onChange={handlechange} value={obj.password}/>
				<button type="submit" onClick={handlesubmit}>Submit</button>
			</form>
		</>
		);
}

export default App;