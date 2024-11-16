import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ParamsData {
  front: number
  back: number
  db: number
}

export interface Data {
  title: string
  dev: ParamsData
  test: ParamsData
  prod: ParamsData
  norm : number
}

interface IDataState {
  data: Data | null;
}

const initialState: IDataState = {
  data: null,
};

export const dataSlice = createSlice({
  initialState,
  name: "data",
  reducers: {
    setData: (state, action: PayloadAction<Data>) => {
      state.data = null
      state.data = action.payload;
    },
  },
});

const { reducer, actions } = dataSlice;
export const { setData } = actions;
export default reducer;