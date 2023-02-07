import React, {ChangeEvent, FC, useState} from "react"
import {FormControl, IconButton, InputAdornment, OutlinedTextFieldProps, TextField} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {useDispatch} from "react-redux"
import {addNote} from "../../Store/Reducers/NotesReducer"

type IMainInput = OutlinedTextFieldProps

const MainInput: FC<IMainInput> = () => {
	const [noteTitle, setNoteTitle] = useState<string>("")
	const [error, setError] = useState<string | null>(null)
	const dispatch = useDispatch()
	const onAddClickHandler = () => {
		if (noteTitle.trim()) {
			dispatch(addNote(noteTitle))
			setNoteTitle("")
		} else {
			setError("Field must to be filled...")
		}
	}
	const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setNoteTitle(event.target.value)
		setError(null)
	}
	const onEnterInputHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.code === "Enter") {
			onAddClickHandler()
		}
	}
	return (
		<FormControl>
			<TextField
				type={"text"}
				placeholder={"Note title..."}
				sx={{
					width: "500px"
				}}
				value={noteTitle}
				onChange={(event) => onChangeInputHandler(event)}
				onKeyDown={(event) => {
					onEnterInputHandler(event)
				}}
				error={!!error}
				helperText={error ? error : ""}
				InputProps={{
					endAdornment:
						<InputAdornment position="end">
							<IconButton
								onClick={onAddClickHandler}
								edge="end"
							>
								<AddIcon/>
							</IconButton>
						</InputAdornment>

				}}

			/>
		</FormControl>
	)
}

export {MainInput}


