import React, {FC, useState} from "react"
import {Button, ButtonGroup, Divider, Paper, Typography} from "@mui/material"
import NoteStyle from "./Note.module.scss"
import DeleteIcon from "@mui/icons-material/Delete"
import {INote} from "../../types"
import {useDispatch} from "react-redux"
import {deleteNote} from "../../Store/Reducers/NotesReducer"
import {Edit} from "@mui/icons-material"
import {EditingNote} from "../EditingNote/EditingNote"
import {Tag} from "../Tag/Tag"
import {TagContainer} from "../TagContainer/TagContainer"

export const Note: FC<INote> = ({
	noteTitle,
	noteBody,
	noteId,
	noteTags
}) => {
	const dispatch = useDispatch()
	const onDeleteClickHandler = () => dispatch(deleteNote(noteId))
	const [isEditing, setIsEditing] = useState<boolean>(false)
	return (
		<Paper elevation={3} className={NoteStyle.notePaper}>
			<Typography variant={"h4"} className={NoteStyle.noteTitle}>{noteTitle}</Typography>
			<Divider/>
			<Typography variant={"body1"} className={NoteStyle.noteBody}>{noteBody}</Typography>
			{/*TODO:  Activate when note tags will be implemented*/}
			{noteTags.length ?
				<>
					<Divider/>
					<TagContainer>
						{noteTags.map(tag => (<Tag key={tag.tagLabel} onDeleteHandler={(tagLabel: string) => {
							return
						}} tagLabel={tag.tagLabel} tagColor={tag.tagColor} textColor={tag.textColor}/>))}
					</TagContainer>
					<Divider/>
				</> :
				""}
			<ButtonGroup variant={"contained"}>
				<Button onClick={onDeleteClickHandler} color={"error"} endIcon={<DeleteIcon/>}>Delete</Button>
				<Button onClick={() => setIsEditing(true)} endIcon={<Edit/>}>Edit</Button>
			</ButtonGroup>
			{isEditing && <EditingNote noteTags={noteTags} closeEditing={() => {
				setIsEditing(false)
			}} noteId={noteId} noteTitle={noteTitle} noteBody={noteBody}/>}
		</Paper>
	)
}