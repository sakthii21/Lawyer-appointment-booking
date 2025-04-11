import { createSlice } from "@reduxjs/toolkit";

const lawyerprofile = createSlice({
  name: "lawyerprofiles", 
  initialState: {
    profiles: [], 
  },
  reducers: {
    setProfiles: (state, action) => {
      state.profiles = action.payload; 
    },
    addProfile: (state, action) => {
      state.profiles.push(action.payload); 
    },
  },
});


export const { setProfiles, addProfile } = lawyerprofile.actions;


export default lawyerprofile.reducer;
