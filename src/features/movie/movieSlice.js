import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],
  newDisney: [],
  original: [],
  trending: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const { recommend, newDisney, original, trending } = action.payload;
      state.recommend = recommend || [];
      state.newDisney = newDisney || [];
      state.original = original || [];
      state.trending = trending || [];
    },
  },
});

export const { setMovies } = movieSlice.actions;

// Selectors to retrieve the state
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
