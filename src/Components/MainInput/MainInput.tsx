import React, {ChangeEvent, FC, useState} from "react"
import {FormControl, IconButton, InputAdornment, OutlinedInput, OutlinedTextFieldProps} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {useDispatch} from "react-redux"
import {addNote} from "../../Store/Reducers/NotesReducer"

type IMainInput = OutlinedTextFieldProps

const MainInput: FC<IMainInput> = () => {
	const [noteTitle, setNoteTitle] = useState<string>("")
	const dispatch = useDispatch()
	const onAddClickHandler = () => {
		dispatch(addNote(noteTitle))
		setNoteTitle("")
	}
	const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNoteTitle(event.target.value)
	const onEnterInputHandler = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		if (event.code === "Enter") {
			if(noteTitle.trim()){
				onAddClickHandler()
			}
		}
	}
	return (
		<FormControl>
			<OutlinedInput
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
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							onClick={onAddClickHandler}
							edge="end"
						>
							<AddIcon/>
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	)
}

export {MainInput}


