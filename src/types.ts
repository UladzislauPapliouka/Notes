interface INote {
	noteId: string
	noteTitle: string
	noteBody: string
	noteTags: INoteTags[]
}

interface INoteTags {
	tagLabel: string
	tagColor: string
	textColor: string
}

export type {INote, INoteTags}