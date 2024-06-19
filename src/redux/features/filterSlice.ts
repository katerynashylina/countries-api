import { regions } from '@/helpers/consts';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  region: regions[0],
};

const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;;
    },
  }
});

export const { setRegion } = regionSlice.actions;
export default regionSlice.reducer;
