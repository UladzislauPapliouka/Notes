import React, {ChangeEvent, FC, useState} from "react"
import {FormControl, IconButton, InputAdornment, OutlinedTextFieldProps, TextField} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {useDispatch} from "react-redux"
import {addNote} from "../../Store/Reducers/NotesReducer"
import {titleValidator} from "../../services/validators"

const MainInput: FC<OutlinedTextFieldProps> = ({...props}) => {
	
	const [noteTitle, setNoteTitle] = useState<string>("")
	const [error, setError] = useState<string | null>(null)
	
	const dispatch = useDispatch()

	const addNewNoteHandler = () => {
		const validationResult = titleValidator(noteTitle)
		if (validationResult.status) {
			dispatch(addNote(noteTitle))
			setNoteTitle("")
		} else {
			setError(validationResult.errorMessage)
		}
	}
	
	const onChangeMainInputHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setNoteTitle(event.target.value)
		setError(null)
	}
	const onEnterInputHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.code === "Enter") {
			addNewNoteHandler()
		}
	}

	const endAdornment = <InputAdornment position="end">
		<IconButton
			onClick={addNewNoteHandler}
			edge="end"
		>
			<AddIcon/>
		</IconButton>
	</InputAdornment>

	return (
		<FormControl>
			<TextField
				type={"text"}
				placeholder={"Note title..."}
				sx={{
					width: "500px"
				}}
				value={noteTitle}
				onChange={onChangeMainInputHandler}
				onKeyDown={onEnterInputHandler}
				error={!!error}
				helperText={error ?? error}
				InputProps={{
					endAdornment: endAdornment
				}}
				{...props}
			/>
		</FormControl>
	)
}

export {MainInput}


