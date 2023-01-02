import React from "react"
import "./App.css"
import {MainInput} from "./Components/MainInput/MainInput"
import {Note} from "./Components/Note/Note"

function App() {
	return (
		<div className="App">
			<MainInput variant={"outlined"}/>
			<Note
				noteTitle={"Note title example"}
				noteBody={"Note text example"}/>
		</div>
	)
}

export default App
