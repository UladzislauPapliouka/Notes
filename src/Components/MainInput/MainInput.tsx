import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from 'react'

interface IMainInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

const MainInput: FC<IMainInput> = ({...props}) =>
    <input {...props}/>
