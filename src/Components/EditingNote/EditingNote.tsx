import React, {FC, useState} from "react"
import {INote} from "../../types"
import EditingNoteStyle from "./EditingNote.module.scss"
import {Button, ButtonGroup, Paper, TextField} from "@mui/material"
import {Check, Close} from "@mui/icons-material"
import {useDispatch} from "react-redux"
import {editNote} from "../../Store/Reducers/NotesReducer"

interface IEditingNote extends INote {
	closeEditing: () => void
}

export const EditingNote: FC<IEditingNote> = ({
	noteId,
	noteTitle,
	noteBody,
	closeEditing
}) => {
	const dispatch = useDispatch()
	const [editingTitle, setEditingTitle] = useState<string>(noteTitle)
	const [editingBody, setEditingBody] = useState<string>(noteBody)
	const onChangeTitleHandler = (newTitle: string) => setEditingTitle(newTitle)
	const onChangeBodyHandler = (newBody: string) => setEditingBody(newBody)
	const onSubmitClickHandler = () => {
		dispatch(editNote({noteId, newTitle: editingTitle, newBody: editingBody}))
		closeEditing()
	}
	return (
		<div onMouseDown={closeEditing} className={EditingNoteStyle.background}>
			<Paper onMouseDown={(event) => event.stopPropagation()} elevation={3} className={EditingNoteStyle.paper}>
				<TextField onChange={(e) => onChangeTitleHandler(e.target.value)} value={editingTitle} label={"Title"}/>
				<TextField onChange={(e) => onChangeBodyHandler(e.target.value)} value={editingBody} rows={13}
						   label={"Note"} multiline maxRows={13}/>
				{/*TODO add possibility to editing tags*/}
				<ButtonGroup disableElevation className={EditingNoteStyle.buttons} variant={"contained"}>
					<Button onClick={onSubmitClickHandler} color={"success"} endIcon={<Check/>}>Submit</Button>
					<Button onClick={closeEditing} color={"error"} endIcon={<Close/>}>Close</Button>
				</ButtonGroup>
			</Paper>
		</div>
	)
}