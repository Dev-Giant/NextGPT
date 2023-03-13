import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  posts: [],
  total: 0
};

const pageSize = 6;

const slice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Collections Success
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    },
  },
});

export default slice.reducer;

export function getPosts(page: number) {
  return async (dispatch: any) => {
    try {
      dispatch(slice.actions.startLoading());
      fetch(`/api/articles?page=${page}&limit=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          slice.actions.getPostsSuccess({
            posts: data.data.articles,
            total: data.data.count,
            page: page,
          })
        );
      })
    } catch (error) {
      dispatch(slice.actions.hasError((error as Error).message));
    }
  };
}
