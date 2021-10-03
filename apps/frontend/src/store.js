import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {
	COUNTER_FEATURE_KEY,
	counterReducer
} from './app/features/Counter/store/counter.slice'

const store = configureStore({
	reducer: {
		[COUNTER_FEATURE_KEY]: counterReducer
	},
	// Additional middleware can be passed to this array
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: process.env.NODE_ENV !== 'production',
	// Optional Redux store enhancers
	enhancers: []
})

setupListeners(store.dispatch)

export default store
