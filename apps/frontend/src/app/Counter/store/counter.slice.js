/* eslint-disable no-param-reassign */
import {
	createAsyncThunk,
	createSelector,
	createSlice
} from '@reduxjs/toolkit'
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

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchCounter())
 * }, [dispatch]);
 * ```
 */
export const fetchRandomNumber = createAsyncThunk(
	'counter/fetchRandomNumber',
	async ({ min, max }, thunkAPI) => {
		const randomNumber = await mockEndpoint(min, max)

		return randomNumber
	}
)
export const initialCounterState = {
	value: 0
}
export const counterSlice = createSlice({
	name: COUNTER_FEATURE_KEY,
	initialState: initialCounterState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		}
		// ...
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchRandomNumber.fulfilled, (state, action) => {
			// Add user to the state array
			state.value = action.payload
		})
	}
})
/*
 * Export reducer for store configuration.
 */
export const counterReducer = counterSlice.reducer
/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(counterActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const counterActions = { ...counterSlice.actions, fetchRandomNumber }
/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllCounter);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */

const getCounterState = (rootState) => rootState[COUNTER_FEATURE_KEY]

export const getCounterValue = createSelector(
	getCounterState,
	(state) => state.value
)

export const counterSelectors = {
	getCounterState,
	getCounterValue
}
