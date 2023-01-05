import React, {FC} from "react"
import TagContainerStyles from "./TagContainer.module.scss"

export const TagContainer: FC<{ children: JSX.Element | JSX.Element[] }> = ({children}) => {
	return (
		<div className={TagContainerStyles.container}>
			{children}
		</div>
	)
}