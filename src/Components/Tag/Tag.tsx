import React, {FC} from "react"
import {Chip} from "@mui/material"
import {INoteTags} from "../../types"

interface ITagComponent extends INoteTags {
	onDeleteHandler: (tagLabel: string) => void
}

export const Tag: FC<ITagComponent> = ({
	tagLabel,
	tagColor,
	textColor,
	onDeleteHandler
}) => {
	return (
		<Chip size={"small"} label={tagLabel} sx={{background: tagColor, color: textColor}}
			  onDelete={onDeleteHandler}/>
	)
}