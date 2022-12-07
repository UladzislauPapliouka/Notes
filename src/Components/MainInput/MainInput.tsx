import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from "react"

type IMainInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const MainInput: FC<IMainInput> = ({...props}) =>
	<input {...props}/>



