"use client";

import { useState, useEffect } from "react";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState<string[]>([]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodo(event.target.value);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (todo === "") return;

		setTodos((prevArray) => [todo, ...prevArray]);
		setTodo("");
	};

	useEffect(() => {
		const saved = localStorage.getItem("todos");

		if (saved) {
			setTodos(JSON.parse(saved));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={todo} onChange={onChange} placeholder="오늘 할 일..." />
				<button>추가</button>
			</form>

			<ul>
				{todos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoForm;
