import React, {FC} from "react"
import {OutlinedTextFieldProps, TextField} from "@mui/material"
import  MainInputStyle from "./MainInput.module.scss"
type IMainInput = OutlinedTextFieldProps

const MainInput: FC<IMainInput> = ({...props}) =>
	<TextField className={MainInputStyle.textField} {...props}/>

export {MainInput}


