import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {v1} from "uuid"
import {INote, INoteTags} from "../../types"
import chroma from "chroma-js"

const initialState: Array<INote> = []

export const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<string>) => {
			const newNote: INote = {
				noteId: v1(),
				noteBody: action.payload,
				noteTitle: action.payload.split(" ")[0],
				noteTags: []
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
		addTagToNote: (state, action: PayloadAction<{ noteId: string, tagLabel: string }>) => {
			const tagColor = chroma.random()
			const newTag: INoteTags = {
				tagLabel: action.payload.tagLabel,
				tagColor: tagColor.hex("rgb"),
				textColor: tagColor.luminance() >= 0.5 ? "black" : "white"
			}
			const workingNote = state.find(note => note.noteId === action.payload.noteId) as INote
			if(workingNote.noteTags.length < 10){
				workingNote.noteTags.push(newTag)
			} else {
				throw new Error("Max count of tags is 10")
			}
		},
		deleteTagFromNote: (state, action: PayloadAction<{ noteId: string, tagLabel: string }>) => {
			const workingNote = state.find(note => note.noteId === action.payload.noteId) as INote
			workingNote.noteTags = workingNote.noteTags.filter(tag => tag.tagLabel !== action.payload.tagLabel)
		}
	}
})

export const {addNote, deleteNote, editNote, addTagToNote, deleteTagFromNote} = notesSlice.actions
export default notesSlice.reducer