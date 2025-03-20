import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    setTask: (state, { payload }) => {
      state.tasks = payload;
    },
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
