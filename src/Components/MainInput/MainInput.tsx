import React, {FC} from "react"
import {OutlinedTextFieldProps, TextField} from "@mui/material"

type IMainInput = OutlinedTextFieldProps

const MainInput: FC<IMainInput> = ({...props}) =>
	<TextField {...props}/>

export {MainInput}


