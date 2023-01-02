import React, {FC} from "react"
import {Divider, Paper, Typography} from "@mui/material"
import NoteStyle from "./Note.module.scss"

interface INote {
	noteTitle: string
	noteBody: string
	//noteTags: INoteTags
}

export const Note: FC<INote> = ({
	noteTitle,
	noteBody
}) => {
	return (
		<Paper elevation={3} className={NoteStyle.notePaper}>
			<Typography variant={"h4"} className={NoteStyle.noteTitle}>{noteTitle}</Typography>
			<Divider/>
			<Typography variant={"body1"} className={NoteStyle.noteBody}>{noteBody}</Typography>
			{/*<Divider/>  Activate  note tags will be implemented*/}
		</Paper>
	)
}