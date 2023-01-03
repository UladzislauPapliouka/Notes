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
		editNote: (state, action: PayloadAction<{ noteId: string, newTitle: string, newBody: string }>) => {
			const editingNote = state.find(note => note.noteId === action.payload.noteId) as INote
			editingNote.noteTitle = action.payload.newTitle ? action.payload.newTitle : editingNote.noteTitle
			editingNote.noteBody = action.payload.newBody ? action.payload.newBody : editingNote.noteBody
		},
	}
})

export const {addNote, deleteNote, editNote} = notesSlice.actions
export default notesSlice.reducer