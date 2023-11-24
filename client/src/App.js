import Auth from './components/Auth'
import NavBar from './components/NavBar';
import Home from './components/Home'
import { auth } from './reducer/auth';
import People,{loadPeople} from './components/People';
import Settings from './components/Settings';
import Layout from './components/Layout';
import {useDispatch} from 'react-redux';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  // const [isAuth,setIsAuth] = useState(JSON.parse(localStorage.getItem('profile')));
	// console.log(isAuth);
  const [person,setPerson] = useState(null)
  const dispatch = useDispatch()
  useEffect(()=>{
    
    try {
      console.log("In useEffect");
      const person_ = JSON.parse(localStorage.getItem('profile'))
      console.log(person_.token.result);
      setPerson(person_.token.result)
      dispatch(auth(person_.token.result));
      // console.log(person);
      // naviga
    } catch (error) {
      
    }
  },[])
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout person = {person}/>} >
				<Route  path='' element={<Auth />}/>
				<Route  path='people'
                element={<People  /> } 
                loader={loadPeople}
                
        />
        <Route  path='settings'
                element = {<Settings />}
                
        />
			</Route>
		)
	)
	return (
		
			<RouterProvider router={router} />
		
	);
}

const peopleData = [
    {
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "Female",
    },
    // Add more people as needed
  ];
  

export default App;
