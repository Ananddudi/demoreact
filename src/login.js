import React from 'react';
import {useCustom} from './context';

export const Login = () => {
 	const {obj,loginsubmit,handlechange} = useCustom();

	return (
			 	<form onSubmit={loginsubmit}>
			 		<label  htmlFor="email">Email</label>
			 		<input type="email" id="email" name="email" value={obj.email} onChange={handlechange} /><br/>
			 		<label  htmlFor="password">Password</label>
			 		<input type="password" id="password" name="password" value={obj.password} onChange={handlechange} /><br/>
			 		<button type="submit">Submit</button>
			 	</form>
		)
}