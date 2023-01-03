import {configureStore} from "@reduxjs/toolkit"
import notesReducer from "./Reducers/NotesReducer"

export const store = configureStore({
	reducer: {
		notes: notesReducer
	},
})

type AppStoreType = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type  {AppStoreType, AppDispatch}