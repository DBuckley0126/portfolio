import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const COUNTER_FEATURE_KEY = 'counter'

const mockEndpoint = (min, max) => {
	const localMin = Math.ceil(min)
	const localMax = Math.floor(max)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(
				Math.floor(Math.random() * (localMax - localMin) + localMin)
			)
		}, 3000)
	})
}

export const fetchRandomNumber = createAsyncThunk(
	'counter/fetchRandomNumber',
	async ({ min, max }, thunkAPI) => {
		const randomNumber = await mockEndpoint(min, max)

		return randomNumber
	}
)
export const initialCounterState = {
	value: 0,
	isLoading: false
}
export const counterSlice = createSlice({
	name: COUNTER_FEATURE_KEY,
	initialState: initialCounterState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRandomNumber.pending, (state, action) => {
			state.isLoading = true
		})

		builder.addCase(fetchRandomNumber.fulfilled, (state, action) => {
			state.isLoading = false

			state.value = action.payload
		})
	}
})

export const counterReducer = counterSlice.reducer

export const counterActions = { ...counterSlice.actions, fetchRandomNumber }

const getCounterState = (rootState) => rootState[COUNTER_FEATURE_KEY]

export const getCounterValue = createSelector(
	getCounterState,
	(state) => state.value
)

export const counterSelectors = {
	getCounterState,
	getCounterValue
}
