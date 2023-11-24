import {createSlice} from '@reduxjs/toolkit';


const initialState = {person : {authenticated:false,name:"",email:"",gender:""}};



 

export const personSlice = createSlice({
  name:'person',
  initialState,
  reducers:{
    auth:(state,action) => {

      const person = {
        authenticated:true,
        ...action.payload
      }
      state.person = person;
      
     
    }
     ,
    update:(state,action) => {
      state.person = {...action.payload};
    //  return state.person;
    },
    logout:(state,action) =>{
      state.person.authenticated = false;
      // return state.person
      // localStorage.clear()
    }
  }
})

export const {auth, update,logout} = personSlice.actions;
export default personSlice.reducer;