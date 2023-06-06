import {createSlice} from '@reduxjs/toolkit';
// created slice (a function that stores initial values)

// defining initial state to false
const initialState = {
  enabled: false,
};

// redux slice
const switchButtonSlice = createSlice({
  name: 'switchButton',
  initialState,
  reducers: {
    toggleSwitch: state => {
      // state.enabled = !state.enabled;
      if (state.enabled == true) {
        state.enabled = false;
        console.log(state.enabled);
      } else {
        state.enabled = true;
        console.log(state.enabled);
      }
    },
  },
});

// exporting toggleSwitch fiiled with actions
export const {toggleSwitch} = switchButtonSlice.actions;
export default switchButtonSlice.reducer;
