import React, {FC} from "react"
import {INote} from "../../types"
import {Note} from "../Note/Note"
import NoteContainerStyles from "./NoteContainer.module.scss"

interface INoteContainer {
	notes: Array<INote>
}

export const NoteContainer: FC<INoteContainer> = ({
	notes
}) => {
	return (
		<div className={NoteContainerStyles.container}>
			{notes.map(note => <Note noteId={note.noteId}
									 key={note.noteId}
									 noteTitle={note.noteTitle}
									 noteBody={note.noteBody}
									 noteTags={note.noteTags}/>)}
		</div>
	)
}