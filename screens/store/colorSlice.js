import {createSlice} from '@reduxjs/toolkit';
// is a function that takes initial values

const initialState = {
  value: [],
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: state => {
      state.value = [...state.value, randomRgb()];
    },
  },
});

export const {setColor} = colorSlice.actions;

export default colorSlice.reducer;
