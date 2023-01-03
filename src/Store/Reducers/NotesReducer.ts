import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {v1} from "uuid"
import {INote} from "../../types"

const initialState: Array<INote> = []

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<string>) => {
			const newNote: INote = {
				noteId: v1(),
				noteBody: action.payload,
				noteTitle: action.payload.split(" ")[0]
			}
			state.push(newNote)
		},
		deleteNote: (state, action: PayloadAction<string>) => {
			return state.filter(note => note.noteId !== action.payload)
		},
	}
})

export const {addNote, deleteNote} = notesSlice.actions
export default notesSlice.reducer