import React from "react"
import "./App.css"
import {MainInput} from "./Components/MainInput/MainInput"
import {NoteContainer} from "./Components/NoteContainer/NoteContainer"

function App() {
	return (
		<div className="App">
			<MainInput variant={"outlined"}/>
			<NoteContainer notes={[]}/>
		</div>
	)
}

export default App
