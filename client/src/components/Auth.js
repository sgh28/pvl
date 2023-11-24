
import { signin, signup } from "../actions/auth"
import { useState } from "react";
// import UserContext from "../../context/UserContext";
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
export default function SignIn() {
    const navigate = useNavigate();
    
    const initialFormState = { name: "", gender: "male", email: "", password: "", };
    const [isSignup, setIsSignup] = useState(false);
    // const {setUser} = useContext(UserContext);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormState)
    function handleChange(event) {
        const key = event.target.name;
        const val = event.target.value;
        setFormData((prev) => ({ ...prev, [key]: val }))
    }
    function handleToggle() {
        setFormData(initialFormState);
        setIsSignup(prev => !prev);
    }
    async function handleSubmit(event) {
        console.log(formData);
        event.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, navigate));
            console.log("signup");

        } else {
            dispatch(signin(formData, navigate));
            console.log("signup");
        }
        // setUser(JSON.parse(localStorage.getItem('profile')));
        
    }

    return (
        
        <div style={{marginTop:'10%'}}>
        <form onSubmit={handleSubmit} style={formStyle}>
        <h4>{isSignup ? 'Sign up' : 'Sign in'}</h4>
          {isSignup && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  id="name"
                  name="name"
                  value={formData.value}
                  placeholder="Enter name"
                  style={inputStyle}
                />
              </div>
              <div className="form-group">
                
                <select
                  onChange={handleChange}
                  value={formData.gender}
                  id="gender"
                  name="gender"
                  style={inputStyle}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </>
          )}
          <div className="form-group">
            <input
              type="text"
              required
              id="email"
              value={formData.email}
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <button type="submit" style={submitButtonStyle}>
              {isSignup ? 'Sign up' : 'Sign in'}
            </button>
          </div>
          <div className="form-group">
            <Link onClick={handleToggle} style={linkStyle}>
              {!isSignup ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
            </Link>
          </div>
        </form>
      </div>
        
    );
}


const formStyle = {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '400px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
  };
  
  const submitButtonStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };