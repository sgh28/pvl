import React, { useEffect, useState } from 'react';
// import {useLoaderData} from 'react-router-dom';
import * as API from '../api/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SettingsPage() {
  const initialUserData = useSelector(state => state.person);


  
  const [userData, setUserData] = useState({ ...initialUserData?.person});
  const [isEditing, setIsEditing] = useState(false);

  console.log(userData);
 

  // const initialUserData = useLoaderData();
  


  const handleNameChange = (e) => {
    const newName = e.target.value;
    setUserData({ ...userData, name: newName });
  };

  const saveChanges = async() => {
    setIsEditing(false);

    // Simulated update function, replace with actual API call
    const result = await API.update(userData);
    
    console.log(result);

  };

 

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <h3>User Information</h3>
        <p>
          <strong>Name:</strong>{' '}
          {isEditing ? (
            <input
              type="text"
              value={userData.name}
              onChange={handleNameChange}
            />
          ) : (
            userData.name
          )}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Gender:</strong> {userData.gender}
        </p>
        {isEditing ? (
          <button onClick={saveChanges}>Save Changes</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit Name</button>
        )}
      </div>
    </div>
  );
}
// export function loadMyData(){
//   const person = useSelector(state => state.person);
//   const navigate = useNavigate();
//   console.log("In loadMy data");
//   if(!person.authenticated){
//     navigate('/');
//   }

//   console.log(person);
//   return person;
// }
export default SettingsPage;
