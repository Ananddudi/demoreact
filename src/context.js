import React,{useContext,useState} from 'react';

const context = React.createContext();

const Contextapi = ({children})=> {

	const [obj,setObj] = useState({
		firstname:'',
		lastname:'',
		email:'',
		password:'',
	});
	const [user,setUser] = useState(null);
	const [value,setValue] = useState(false);

	const handlechange = (e) =>{
		setObj({...obj,[e.target.name]:e.target.value})
	}

	const handlesubmit = async(e) => {
		e.preventDefault();
		const data = await fetch('',{
			method:'POST',
			mode: 'cors',
			headers: {
				'content-type':'application/json'
			},
			body: JSON.stringify({
				firstname:obj.firstname,
				lastname:obj.lastname,
				email:obj.email,
				password:obj.password
			})
		})
		if(data.status === 200){
			setValue(false)
			setUser(localStorage.setItem("whatever value is",""))	
		}
	}

	const loginsubmit = async(e) => {
		e.preventDefault();
		const data = await fetch('',{
			method:'POST',
			mode: 'cors',
			headers: {
				'content-type':'application/json'
			},
			body: JSON.stringify({
				email:obj.email,
				password:obj.password
			})
		})
		if(data.status === 200){
			let res = await data.json()
			setUser(localStorage.setItem("whatever value is",JSON.stringify(res)))
			setValue(true)
		}
	}

	return (
		<context.Provider value={{
			handlesubmit:handlesubmit,
			handlechange:handlechange,
			obj:obj,
			loginsubmit:loginsubmit,
			user:user,
			value:value
		}}>
			{children}
		</context.Provider>
		)
}

// custom hook

const useCustom = () => {
	return useContext(context)
}

export {useCustom,Contextapi};



//I can use useMemo and React.Memo and useCallback for optimization as well 