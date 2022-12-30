import React, {ChangeEvent, FC, useState} from "react"
import {FormControl, IconButton, InputAdornment, OutlinedInput, OutlinedTextFieldProps} from "@mui/material"
import MainInputStyle from "./MainInput.module.scss"
import AddIcon from "@mui/icons-material/Add"

type IMainInput = OutlinedTextFieldProps

const MainInput: FC<IMainInput> = ({...props}) => {
	const [noteTitle, setNoteTitle] = useState<string>("")
	const onAddClickHandler = () => {
		//TODO: Add usage of callback to add new note
		console.log(noteTitle)
		setNoteTitle("")
	}
	const onChangeInputHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNoteTitle(event.target.value)
	const onEnterInputHandler = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		if (event.code === "Enter") {
			onAddClickHandler()
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


