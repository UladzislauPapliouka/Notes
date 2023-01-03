import React from "react"
import "./App.css"
import {MainInput} from "./Components/MainInput/MainInput"
import {NoteContainer} from "./Components/NoteContainer/NoteContainer"
import {useSelector} from "react-redux"
import {AppStoreType} from "./Store/Store"

function App() {
	const notes = useSelector((store: AppStoreType) => store.notes)
	return (
		<div className="App">
			<MainInput variant={"outlined"}/>
			<NoteContainer notes={notes}/>
		</div>
	)
}

export default App
