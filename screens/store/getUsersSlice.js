import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchGitHubData = createAsyncThunk('users/login', async () => {
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();
  return data;
});

const initialState = {
  featureEnabled: false,
  githubData: [],
  isLoading: false,
  error: null,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    toggleFeature: state => {
      state.featureEnabled = !state.featureEnabled;
    },
  },

  //  if state.featureEnable is true then
  //      state.isLoading = false
  //      state.githubData = action.payload
  //  else
  //      state.isLoading = true
  //      state.error = null

  extraReducers: builder => {
    builder
      .addCase(fetchGitHubData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGitHubData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.githubData = action.payload;
      })
      .addCase(fetchGitHubData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {toggleFeature} = featureSlice.actions;
export default featureSlice.reducer;

// addcase has 3 action types (pending, fullfilled , error)
//
