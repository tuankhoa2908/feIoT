import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import recordService from "./recordService";

export const getDatas = createAsyncThunk(
    "data/get-data",
    async (thunkAPI) => {
        try {
            return await recordService.getDatas();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const recordDetail = createAsyncThunk(
    "data/record-detail",
    async (id, thunkAPI) => {
        try {
            return await recordService.recordDetail(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const resetState = createAction("reset-all");

const initialState = {
    datas: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    record: {},
};

export const dataSlice = createSlice({
    name: "datas",
    initialState,
    reducers: {},
    extraReducers: (buider) => {
        buider
            .addCase(getDatas.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDatas.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.datas = action.payload;
            })
            .addCase(getDatas.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(recordDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(recordDetail.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.record = action.payload;
                state.message = "success";
            })
            .addCase(recordDetail.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(resetState, () => initialState);
    }
})

export default dataSlice.reducer;