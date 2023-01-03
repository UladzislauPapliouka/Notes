import React, {FC} from "react"
import {Button, ButtonGroup, Divider, Paper, Typography} from "@mui/material"
import NoteStyle from "./Note.module.scss"
import DeleteIcon from "@mui/icons-material/Delete"
import {INote} from "../../types"
import {useDispatch} from "react-redux"
import {deleteNote} from "../../Store/Reducers/NotesReducer"

export const Note: FC<INote> = ({
	noteTitle,
	noteBody,
	noteId
}) => {
	const dispatch = useDispatch()
	const onDeleteClickHandler = () => dispatch(deleteNote(noteId))
	return (
		<Paper elevation={3} className={NoteStyle.notePaper}>
			<Typography variant={"h4"} className={NoteStyle.noteTitle}>{noteTitle}</Typography>
			<Divider/>
			<Typography variant={"body1"} className={NoteStyle.noteBody}>{noteBody}</Typography>
			{/*<Divider/>  Activate  note tags will be implemented*/}
			{/*TODO: Add button group to edit/delete note	*/}
			<ButtonGroup variant={"contained"}>
				<Button onClick={onDeleteClickHandler} endIcon={<DeleteIcon/>}>Delete</Button>
			</ButtonGroup>
		</Paper>
	)
}