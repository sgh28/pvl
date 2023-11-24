import {createSlice} from '@reduxjs/toolkit';


const initialState = {people : []};



 

export const peopleSlice = createSlice({
  name:'people',
  initialState,
  reducers:{
    get_all:(state,action) => {
      
      state.people = [...action.payload];
    }
     
  }
})

export const {get_all} = peopleSlice.actions;
export default peopleSlice.reducer;