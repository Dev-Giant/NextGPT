import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  openAIPost: "",
};

const slice = createSlice({
  name: "openai",
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
    getResultSuccess(state, action) {
      state.isLoading = false;
      state.openAIPost = action.payload.openAIPost;
    },
  },
});

export default slice.reducer;

export function getOpenAIResult(input: string) {
  return async (dispatch: any) => {
    try {
      dispatch(slice.actions.startLoading());
      fetch("/api/gpt3/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: input,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(
            slice.actions.getResultSuccess({
              openAIPost: data.data.text.text,
            })
          );
        });
    } catch (error) {
      dispatch(slice.actions.hasError((error as Error).message));
    }
  };
}
