import React, {FC, useState} from "react"
import {INote} from "../../types"
import EditingNoteStyle from "./EditingNote.module.scss"
import {Button, ButtonGroup, IconButton, InputAdornment, OutlinedInput, Paper, TextField} from "@mui/material"
import {Check, Close} from "@mui/icons-material"
import {useDispatch} from "react-redux"
import {addTagToNote, deleteTagFromNote, editNote} from "../../Store/Reducers/NotesReducer"
import {Tag} from "../Tag/Tag"
import {TagContainer} from "../TagContainer/TagContainer"
import AddIcon from "@mui/icons-material/Add"

interface IEditingNote extends INote {
	closeEditing: () => void
}

export const EditingNote: FC<IEditingNote> = ({
	noteId,
	noteTitle,
	noteBody,
	closeEditing,
	noteTags,
}) => {
	const dispatch = useDispatch()
	const [editingTitle, setEditingTitle] = useState<string>(noteTitle)
	const [editingBody, setEditingBody] = useState<string>(noteBody)
	const [addingTag, setAddingTag] = useState<string>("")
	const [addTagsError, setTagsError] = useState<string|null>(null)
	const onChangeTitleHandler = (newTitle: string) => setEditingTitle(newTitle)
	const onChangeBodyHandler = (newBody: string) => setEditingBody(newBody)
	const onChangeTagHandler = (newTag: string) => setAddingTag(newTag)
	const onEnterInputHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.code === "Enter") {
			onAddTagHandler()
		}
	}
	const onSubmitClickHandler = () => {
		dispatch(editNote({noteId, newTitle: editingTitle, newBody: editingBody}))
		closeEditing()
	}
	const onAddTagHandler = () => {
		try {
			dispatch(addTagToNote({noteId, tagLabel: addingTag}))
		} catch (e:any) {
			setTagsError(e.message)
		}
	}
	const onDeleteTagHandler = (tagLabel: string) => {
		dispatch(deleteTagFromNote({noteId, tagLabel}))
	}
	return (
		<div onMouseDown={closeEditing} className={EditingNoteStyle.background}>
			<Paper onMouseDown={(event) => event.stopPropagation()} elevation={3} className={EditingNoteStyle.paper}>
				<TextField onChange={(e) => onChangeTitleHandler(e.target.value)} value={editingTitle} label={"Title"}/>
				<TextField onChange={(e) => onChangeBodyHandler(e.target.value)} value={editingBody} rows={13}
						   label={"Note"} multiline maxRows={13}/>
				{/*TODO add possibility to editing tags*/}
				<TextField
					type={"text"}
					placeholder={"New tag..."}
					value={addingTag}
					error={!!addTagsError}
					helperText={addTagsError ? addTagsError : ""}
					onChange={(event) => onChangeTagHandler(event.target.value)}
					onKeyDown={(event) => {
						onEnterInputHandler(event)
					}}
					InputProps={{
						endAdornment:<InputAdornment position="end">
							<IconButton
								onClick={() => onAddTagHandler()}
								edge="end"
							>
								<AddIcon/>
							</IconButton>
						</InputAdornment>
					}}
				/>
				<TagContainer>
					{noteTags.map(tag => (
						<Tag key={tag.tagLabel} onDeleteHandler={onDeleteTagHandler} tagLabel={tag.tagLabel}
							 tagColor={tag.tagColor} textColor={tag.textColor}/>))}
				</TagContainer>
				<ButtonGroup disableElevation className={EditingNoteStyle.buttons} variant={"contained"}>
					<Button onClick={onSubmitClickHandler} color={"success"} endIcon={<Check/>}>Submit</Button>
					<Button onClick={closeEditing} color={"error"} endIcon={<Close/>}>Close</Button>
				</ButtonGroup>
			</Paper>
		</div>
	)
}