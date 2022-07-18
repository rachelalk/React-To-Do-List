import { useState, React } from "react";
import Button from "../Button";
import "./App.css";
import Input from "../Input";
import List from "../List";

<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Imprima&family=Spline+Sans+Mono:wght@300&display=swap');
</style>;

function App() {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	// const [deleteID, setDeleteID] = useState(0);
	const [arrayList, setArray] = useState([
		// { id: 0, toDoItem: "Add item to get started" },
	]);
	const [inputField, setInputField] = useState("");

	function handleChange(e) {
		setInputField(e.target.value);
		setText(e.target.value);
	}
	function handleClick() {
		setInputField("");
		setIndex(index + 1);
		const newItem = { id: index, toDoItem: text };
		setArray([...arrayList, newItem]);
		console.log(arrayList);
	}

	function deleteClick(idValue) {
		setArray(arrayList.filter((item) => item.id !== idValue));
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>To do list</h1>
				<Input className= "input-field" handleChange={handleChange} inputValue={inputField} />
				<Button
					className="add-to-list-button"
					onClick={handleClick}
					text={"Add to list"}
				></Button>
				<ul id="list">
					{arrayList.map(function (item) {
						return (
							<List
								text={item.toDoItem}
								key={item.id}
								onClick={() => {
									deleteClick(item.id);
								}}
								buttonText={"Delete"}
								className="delete-button"
								keyValue={item.id}
							></List>
						);
					})}
				</ul>
			</header>
		</div>
	);
}

export default App;
