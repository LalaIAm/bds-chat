import { createSlice } from '@reduxjs/toolkit';


const initState = {
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    connectUser: (state, action) => {
      state.username = action.payload;
    },
    disconnectUser: (state) => {
      return initState;
    },
  },
});


export default userSlice.reducer;

export const {connectUser, disconnectUser} = userSlice.actions